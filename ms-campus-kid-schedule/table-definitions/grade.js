'use strict';

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    enrollment: {
      allowNull: false,
      references: {
        model: 'Enrollments',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: DataTypes.TEXT,
    },
    grade: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    percentage: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
};

module.exports.constraints = {};
