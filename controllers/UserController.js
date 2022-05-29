import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import Product from "../models/products.js";

// import Admin from "../models/Admin.js";
// import Admins from "../models/Admin.js";

// dotenv.config();
// import Models from "../models/index.js";
export const register = async (req, res, next) => {
  //res.status(201).json(req.body);
  //add new Admin and return 201
  try {
    const salt = await bcrypt.genSalt(10);
    console.log("req", req.body);

    const usr = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      address_id: req.body.address_id,
    };
    console.log("req", usr);

    const created_admin = await Admin.create(usr);
    res.status(201).json(created_admin);
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });
    console.log("Admin");
    if (admin) {
      const password_valid = await bcrypt.compare(
        req.body.password,
        admin.password
      );
      if (password_valid) {
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
        res.status(200).json({ token: token });
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ error: "Admin does not exist" });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllAdmins = async (req, res, next) => {
  console.log("response", res);
  res.send("resss");
};
export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleAdmin = async () => {};
