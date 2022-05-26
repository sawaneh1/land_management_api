import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
// import User from "../models/user.js";
// import Users from "../models/user.js";

dotenv.config();
// import Models from "../models/index.js";
export const register = async (req, res, next) => {
  //res.status(201).json(req.body);
  //add new user and return 201
  try {
    const salt = await bcrypt.genSalt(10);
    const usr = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      userType: req.body.userType,
      password: await bcrypt.hash(req.body.password, salt),
    };
    const created_user = await User.create(usr);
    res.status(201).json(created_user);
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("user");
    if (user) {
      const password_valid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (password_valid) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ token: token });
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  console.log("response", res);
  res.send("resss");
};

export const getSingleUser = async () => {};
