'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_transacciones', 'fecha', {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_transacciones', 'fecha', {
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};
