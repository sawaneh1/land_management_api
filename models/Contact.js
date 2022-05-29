import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Contact = db.define("contact", {
  // Define attributes
  f_name: DataTypes.STRING,
  lname_name: DataTypes.STRING,
  email: DataTypes.STRING,
  message: DataTypes.TEXT,
  // userType: DataTypes.STRING,
  //   Contact_id: DataTypes.IN
});

// Export model Product
export default Contact;
