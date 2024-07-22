'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pago.hasMany(models.Detallepago, { foreignKey: 'id_pago' });
    }
  }
  Pago.init({
    nombre_pago: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pago',
    tableName: 'tbl_pagos', // Asegurarse de que el nombre de la tabla esté entre comillas
    timestamps: true
  });
  return Pago;
};