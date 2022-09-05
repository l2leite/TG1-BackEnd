'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funcao', {
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
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      departamento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      permissoes: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('funcao');
  }
};
