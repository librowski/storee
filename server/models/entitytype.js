'use strict';
module.exports = (sequelize, DataTypes) => {
  const EntityType = sequelize.define('EntityType', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  EntityType.associate = function(models) {
    // associations can be defined here
  };
  return EntityType;
};