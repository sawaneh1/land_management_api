import express from "express";
// import Models from "./../models/user.js";
// import Model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createProduct,
  getAllAdmins,
  Login,
  register,
} from "../controllers/UserController.js";
import userAuth from "../middleware/Auth/user.js";
// const User = Models.User;
import Admin from "../models/Admin.js";
import multer from "multer";
dotenv.config();

/* GET users listing. */
const router = express.Router();
router.get("/users", userAuth, getAllAdmins);

router.post("/register", register);

router.post("/login", Login);
router.post("/test", createProduct);

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
    let admin = await Admin.findOne({
      where: { id: req.admin.id },
      attributes: { exclude: ["password"] },
    });
    if (admin === null) {
      res.status(404).json({ msg: "admin not found" });
    }
    res.status(200).json(admin);
  }
);

export default router;
