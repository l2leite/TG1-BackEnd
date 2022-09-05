'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recarga', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'funcionario',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cliente',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      forma_pagamento: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'dinheiro'
      },
      valor: {
        type: Sequelize.DOUBLE(8,2),
        allowNull: false,
      },
      autorizacao: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'Pagamento em dinheiro, aprovação automática.',
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
    await queryInterface.dropTable('recarga');
  }
};
