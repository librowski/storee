'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ConnectionTypes', [{
      id: 1,
      name: 'Love',
      description: 'The most overrated feeling ever',
      color: '#FF0000',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ConnectionTypes', null, {});
  }
};
