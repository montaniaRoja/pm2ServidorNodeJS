'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaccion.belongsTo(models.Cuenta, { foreignKey: 'cuenta_id' });
    }
  }
  Transaccion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cuenta_id: { type: DataTypes.INTEGER },
    tipo_movimiento: { type: DataTypes.STRING },
    monto: { type: DataTypes.DECIMAL },
    cajero:{type: DataTypes.INTEGER},
    fecha: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'Transaccion',
    tableName: 'transaccions',
    timestamps: true,
    underscored: true

  });
  return Transaccion;
};
