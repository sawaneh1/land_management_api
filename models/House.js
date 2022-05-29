import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const House = db.define("house", {
  // Define attributes
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  imagePath: DataTypes.STRING,
  price: DataTypes.DOUBLE,

  address_id: DataTypes.INT,
  // userType: DataTypes.STRING,
  //   House_id: DataTypes.IN
});

// Export model Product
export default House;
