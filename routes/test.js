import express from "express";
// import Models from "./../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import { getAllUsers, Login, register } from "../controllers/UserController.js";
// import userAuth from "../middleware/Auth/user.js";
// import upload from "../config/upload.config.js";
import { upload } from "../controllers/upload.controller.js";
import multer from "multer";
import Image from "../models/image.js";
import sequelize from "sequelize";
dotenv.config();

/* GET users listing. */
const router = express.Router();
// router.post("/uploads", upload);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./File");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
router.post(
  "/uploads",

  multer({ storage }).single("data"),
  multer().any(),
  async (req, res) => {
    // This needs to be done elsewhere. For this example we do it here.
    // await sequelize.sync();
    // console.log("req", req);
    const data = `${req.file.destination}/${req.file.filename}`;
    console.log("dara", data);
    const images = await Image.create(data);
    // console.log("res", res);
    // console.log("images", images);
    // Image.save(images);
  }
);

export default router;
