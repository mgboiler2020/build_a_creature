'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BodyPart extends Model {
    static associate(models) {
      BodyPart.belongsTo(models.User, {
        through: "Building",
        foreignKey: "id",
        otherKey: "id"
      })
    }
  };
  BodyPart.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    buildingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BodyPart',
  });
  return BodyPart;
};