import express from "express";
import Models from "./../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getAllUsers, Login, register } from "../controllers/UserController.js";
import userAuth from "../middleware/Auth/user.js";
const User = Models.User;
dotenv.config();

/* GET users listing. */
const router = express.Router();
router.get("/users", userAuth, getAllUsers);

router.post("/register", register);

router.post("/login", Login);

router.get(
  "/me",
  async (req, res, next) => {
    try {
      let token = req.headers["authorization"].split(" ")[1];
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Couldnt Authenticate" });
    }
  },
  async (req, res, next) => {
    let user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    if (user === null) {
      res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  }
);

export default router;
