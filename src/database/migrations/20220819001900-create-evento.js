'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('evento', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      responsavel: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      publico: {
        type:Sequelize.INTEGER,
        allowNull: true,
      },
      pagantes: {
        type:Sequelize.INTEGER,
        allowNull: true,
      },
      faturamento: {
        type:Sequelize.DOUBLE(10,2),
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
    await queryInterface.dropTable('evento');
    
  }
};
