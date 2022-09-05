'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('pessoa', 'sexo', { type: Sequelize.STRING });
    await queryInterface.addColumn('pessoa', 'email', { type: Sequelize.STRING });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('pessoa', { sexo, email });
  }
};
