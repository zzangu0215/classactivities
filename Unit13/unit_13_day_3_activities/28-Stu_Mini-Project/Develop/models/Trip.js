const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Trip model
class Trip extends Model {}

// create fields/columns for Trip model
Trip.init(
  {
    // TODO: configure columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip"
  }
);

module.exports = Trip;
