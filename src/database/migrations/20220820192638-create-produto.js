'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome_comercial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fabricante: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      embalagem: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'Garrafa'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};
