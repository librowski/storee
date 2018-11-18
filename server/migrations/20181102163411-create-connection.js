'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Connections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bilateral: {
        type: Sequelize.BOOLEAN
      },
      sender: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Entities',
          key: 'id',
        }
      },
      receiver: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Entities',
          key: 'id',
        }
      },
      connectionType: {
        type: Sequelize.INTEGER,

        references: {
          model: 'ConnectionTypes',
          key: 'id',
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Connections');
  }
};