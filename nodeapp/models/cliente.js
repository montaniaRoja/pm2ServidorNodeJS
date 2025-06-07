'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Cuenta, { foreignKey: 'id_cliente' });
      // Puedes agregar aquí la relación con el modelo User si lo necesitas
      // Cliente.belongsTo(models.User, { foreignKey: 'creado_por' });
    }
  }

  Cliente.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    no_doc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creado_por: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clave_secreta: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'customers',
    timestamps: true,
    underscored: true
  });

  return Cliente;
};
