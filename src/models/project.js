'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    title: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.STRING,
    technologies: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING,
    author: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
    timestamps:true,
    createdAt:true,
    updatedAt:'updateTimestamp'
  });
  return Project;
};