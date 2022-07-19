'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Larry',
          last_name: 'Beck',
          email: 'larry@wetheculture.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Leo',
          last_name: 'Otero',
          email: 'leonardo@wetheculture.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Justin',
          last_name: 'Thaiwates',
          email: 'justin@wetheculture.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Ryan',
          last_name: 'Rayner',
          email: 'ryan@wetheculture.io',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};