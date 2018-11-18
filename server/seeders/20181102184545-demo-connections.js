'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Connections', [{
      id: 1,
      bilateral: false,
      sender: 1,
      receiver: 1,
      connectionType: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Connections', null, {});
  }
};
