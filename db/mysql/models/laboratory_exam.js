'use strict';
module.exports = (sequelize, DataTypes) => {
  const laboratory_exam = sequelize.define('laboratorys_exams', {
    id: { type: DataTypes.INTEGER, primaryKey:true},
    exam_id: DataTypes.INTEGER,
    laboratory_id: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, field: 'created_at' },
    updated_at: { type: DataTypes.DATE, field: 'updated_at' },
  }, {
    timestamps: false
});
  
  return laboratory_exam;
};