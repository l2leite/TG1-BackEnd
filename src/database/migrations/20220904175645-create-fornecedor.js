'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fornecedor', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      razao_social: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_fantasia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ie: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      im: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_abertura: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contato: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('fornecedor');
  }
};
