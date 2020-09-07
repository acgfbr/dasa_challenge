'use strict';
module.exports = (sequelize, DataTypes) => {
  const laboratory = sequelize.define('laboratorys', {
    id: { type: DataTypes.INTEGER, primaryKey:true,autoIncrement: true},
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, field: 'created_at' },
    updated_at: { type: DataTypes.DATE, field: 'updated_at' },
  },{
    timestamps: false
});
  
  return laboratory;
};