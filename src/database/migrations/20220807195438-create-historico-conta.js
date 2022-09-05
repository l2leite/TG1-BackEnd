'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('historico_conta', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      conta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'conta',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      operacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE(7,2),
        allowNull: false,
        default: 0.00,
      },
      saldo_inicial: {
        type: Sequelize.DOUBLE(7,2),
        allowNull: false,

      },      
      saldo_final: {
        type: Sequelize.DOUBLE(7,2),
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('historico_conta');
    
  }
};