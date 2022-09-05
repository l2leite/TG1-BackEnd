'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('funcao', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn('funcao', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
      },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('funcao', 'created_at');
    await queryInterface.removeColumn('funcao', 'ipdated_at');
  }
};
