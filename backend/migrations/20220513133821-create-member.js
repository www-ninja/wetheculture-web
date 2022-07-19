'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('Members', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },      
      avatar: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Members');
  }
};
