'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funcionario', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoa',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      funcao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'funcao',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      login: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Teste',
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Teste',
      },
      salario: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: true,
        default: 0.00,
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('funcionario');
  }
};
