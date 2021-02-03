'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Garden, {
        foreignKey: "id"
      }),
      User.belongsTo(models.BodyPart, {
        through: "Building",
        foreignKey: "id",
        otherKey: "bodyPartId",
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};