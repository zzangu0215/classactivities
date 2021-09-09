const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Traveller model
class Traveller extends Model {}

// create fields/columns for Traveller model
Traveller.init(
  {
    // TODO: configure columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller"
  }
);

module.exports = Traveller;
