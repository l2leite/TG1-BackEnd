'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.addColumn('produto', 'created_at', {
  type: Sequelize.DATE,
  allowNull: false,
});
await queryInterface.addColumn('produto', 'updated_at', {
  type: Sequelize.DATE,
  allowNull: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produto', 'created_at');
    await queryInterface.removeColumn('produto', 'ipdated_at');
  }
};
