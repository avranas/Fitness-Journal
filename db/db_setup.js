const { Sequelize } = require("sequelize");
require("dotenv").config();

let db = null;
if(process.env.NODE_ENV === "development") {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000,
      },
      port: process.env.DB_PORT,
      timestamps: false,
      freezeTableName: true,
    }
  );
}

if(process.env.NODE_ENV === "production") {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000,
      },
      port: process.env.DB_PORT,
      timestamps: false,
      freezeTableName: true,
  
      //This is required for production.
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );
}



//Test database connection
db.authenticate()
  .then(() => console.log("Connection to database successful"))
  .catch((err) => console.log("Connection to database unsuccessful :( " + err));

module.exports = db;
