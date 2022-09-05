'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('compra', {
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
      fornecedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fornecedor',
          key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nota_fiscal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor_total: {
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
    await queryInterface.dropTable('compra');
  }
};
