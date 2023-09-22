const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNule: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNule: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNule: false
      }
   }, 
   { timestamps: false });
};
