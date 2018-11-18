'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entities', [{
      id: 1,
      name: 'John Doe',
      type: 1,
      description: "asdasdasdasdasdsad",
      image: "asdasdasdasdasd",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entities', null, {});
  }
};
