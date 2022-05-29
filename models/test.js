"use strict";
import db from "./index.js";
// import { Model } from "sequelize";

// export const User = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init(
//     {
//       first_name: DataTypes.STRING,
//       last_name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       userType: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };
// export default User;

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Test = db.define("Test", {
  // Define attributes
  test_name: DataTypes.STRING,
  tester_name: DataTypes.STRING,
});

// Export model Product
export default Test;
