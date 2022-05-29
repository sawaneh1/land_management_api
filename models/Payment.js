import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Payment = db.define("payment", {
  // Define attributes
  f_name: DataTypes.STRING,
  lname_name: DataTypes.STRING,
  email: DataTypes.STRING,
  date: DataTypes.TIMESTAMP,
  // userType: DataTypes.STRING,
  house_id: DataTypes.INT,
  // userType: DataTypes.STRING,
  //   Payment_id: DataTypes.IN
});

// Export model Product
export default Payment;
