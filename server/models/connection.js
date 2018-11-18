'use strict';
module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
    bilateral: DataTypes.BOOLEAN,
    sender: DataTypes.INTEGER,
    receiver: DataTypes.INTEGER,
  }, {});
  Connection.associate = function(models) {
    models.Connection.belongsTo(models.ConnectionType, {foreignKey: 'connectionType'});
    models.Connection.belongsTo(models.Entity, {foreignKey: 'sender'});
    models.Connection.belongsTo(models.Entity, {foreignKey: 'receiver'});
  };
  return Connection;
};