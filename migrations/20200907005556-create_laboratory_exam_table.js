'use strict';

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable("laboratorys_exams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      exam_id: {
        type: DataTypes.INTEGER
      },
      laboratory_id: {
        type: DataTypes.INTEGER
      },
      
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: function(migration) {
    return migration.dropTable("laboratorys_exams");
  }
};
