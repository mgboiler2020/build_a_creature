'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name:'Matt',
        username: 'guffy',
        password: '123',
    },
    {
        name:'Ana Cecilia',
        username: 'anace',
        password: 'acmc',
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
