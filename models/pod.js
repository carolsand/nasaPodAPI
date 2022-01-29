'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pod.init({
    image: DataTypes.BLOB,
    id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pod',
  });
  return Pod;
};