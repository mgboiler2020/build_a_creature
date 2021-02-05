'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    static associate(models) {
      Garden.belongsTo(models.User, {
        foreignKey: "id" });
    }
  };
  Garden.init({
    creatureName: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Garden',
  });
  return Garden;
};