'use strict';
const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const exam = sequelize.define('exams', {
    id: { type: DataTypes.INTEGER, primaryKey:true},
    name: DataTypes.STRING,
    exam_type: DataTypes.STRING,
    status: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, field: 'created_at' },
    updated_at: { type: DataTypes.DATE, field: 'updated_at' },
  }, {
    timestamps: false
});

  sequelizePaginate.paginate(exam)
  return exam;
};