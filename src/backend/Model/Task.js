const { Model, DataTypes } = require("sequelize");
const sequelize = require('./../database');

class Task extends Model {};

Task.init({
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    startDate: {
        type: DataTypes.DATE
    },
    endDate: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'task',
    timestamps: false
})

module.exports = Task;