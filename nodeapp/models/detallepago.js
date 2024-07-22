'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detallepago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detallepago.belongsTo(models.Pago, { foreignKey: 'id_pago' });
    }
  }
  Detallepago.init({
    id_pago: { type: DataTypes.INTEGER, allowNull: false },
    clavepago: { type: DataTypes.STRING, allowNull: false },
    monto: { type: DataTypes.FLOAT, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: false }

  }, {
    sequelize,
    modelName: 'Detallepago',
    tableName: 'tbl_detallepagos', // Asegurarse de que el nombre de la tabla esté entre comillas
    timestamps: true
  });
  return Detallepago;
};