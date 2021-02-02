'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('BodyParts', [
    {
      name: "Bear Legs"
    },
    {
      name: "Bear Body"
    },
    {
      name: "Bear Arms"
    },
    {
      name: "Bear Head"
    }
], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BodyParts', null, {});
  }
};
