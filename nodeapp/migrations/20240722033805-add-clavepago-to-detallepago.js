'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_detallepagos', 'clavepago', {
      type: Sequelize.STRING, // Ajusta el tipo de dato según tus necesidades
      allowNull: true, // Ajusta las restricciones según tus necesidades
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_detallepagos', 'clavepago');
  }
};
