'use strict';

module.exports = {
  up: function(migration, DataTypes) {
    return migration.createTable("exams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      exam_type: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
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

  down: (migration) => {
    return migration.dropTable("exams");
  }
};
