// module.exports = (sequelize, Sequelize) => {
// 	const Image = sequelize.define('image', {
// 	  type: {
// 		type: Sequelize.STRING
// 	  },
// 	  name: {
// 		type: Sequelize.STRING
// 	  },
// 	  data: {
// 		type: Sequelize.BLOB('long')
// 	  }
// 	});

// 	return Image;
// }
import db from "./index.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Image = db.define("imagesData", {
  // Define attributes
  data: {
    type: DataTypes.STRING,
    defaultValue: "sol",
  },
  timestamps: false,

  //   data: DataTypes.BLOB,
  //   type: DataTypes.STRING,
});

// Export model Product
export default Image;
