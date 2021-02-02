'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    static associate(models) {
      Garden.belongsTo(models.User, {
        foreignKey: "userId" });
    }
  };
  Garden.init({
    creatureName: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Garden',
  });
  return Garden;
};