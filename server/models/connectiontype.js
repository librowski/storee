'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConnectionType = sequelize.define('ConnectionType', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING
  }, {});
  ConnectionType.associate = function(models) {
    // associations can be defined here
  };
  return ConnectionType;
};