'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('estoque', 'valor_unitario', {
      type: Sequelize.DOUBLE(8,2),
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('estoque', 'valor_unitario');
  }
};
