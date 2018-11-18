'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EntityTypes', [{
      id: 1,
      name: "Character",
      description: "asdasdasdasdasdsad",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EntityTypes', null, {});
  }
};
