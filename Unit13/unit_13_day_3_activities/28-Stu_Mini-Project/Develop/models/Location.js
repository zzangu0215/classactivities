const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Location model
class Location extends Model {}

// create fields/columns for Location model
Location.init(
  {
    // TODO: configure columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location"
  }
);

module.exports = Location;
