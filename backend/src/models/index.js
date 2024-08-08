const { Sequelize } = require("sequelize");
const config = require("../../config/config.js");

const env = process.env.NODE_ENV || "development";
const envConfig = config[env];

const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect,
    port: envConfig.port,
    logging: envConfig.logging,
  },
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require("./User.js")(sequelize, Sequelize.DataTypes);
db.Token = require("./Token.js")(sequelize, Sequelize.DataTypes);

module.exports = db;
