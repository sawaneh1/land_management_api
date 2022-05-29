"use strict";
import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Admin = db.define("admin", {
  // Define attributes

  fname: {
    type: DataTypes.STRING,
    defaultValue: "sol",
  },

  lname: {
    type: DataTypes.STRING,
    defaultValue: "saw",
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: "test",
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: "password",
  },
  // userType: DataTypes.STRING,
  address_id: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

// Export model Product
export default Admin;
