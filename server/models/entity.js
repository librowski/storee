'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('Entity', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    type: DataTypes.INTEGER
  }, {});
  Entity.associate = function(models) {
    models.Entity.hasOne(models.EntityType, {foreignKey: 'id'});
    models.Entity.belongsToMany(models.Entity, {as: 'Receivers', through: 'Connections', foreignKey: 'receiver'});
    models.Entity.belongsToMany(models.Entity, {as: 'Senders', through: 'Connections', foreignKey: 'sender'});
  };
  return Entity;
};