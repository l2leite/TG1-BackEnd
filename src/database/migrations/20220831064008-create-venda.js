'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('venda', {
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
      evento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'evento',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      valor: {
        type: Sequelize.DOUBLE(10,4),
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('venda');
  }
};
