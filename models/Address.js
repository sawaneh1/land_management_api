import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Address = db.define("address", {
  // Define attributes
  street_address: DataTypes.String,
  city: DataTypes.String,
  state: DataTypes.String,
  country: DataTypes.String,
});

// Export model Product
export default Address;
