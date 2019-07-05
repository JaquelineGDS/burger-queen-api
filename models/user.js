'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders,{foreignKey: 'uid'});
  };
  // User.create({name:'Sonia', email: 'sol_g@gmail.com'});
  // User.create({name:'Jaqueline', email: 'jaque@h.com'});
  // User.create({name:'Karina', email: 'kag@gmail.com'});
 
 
  return User;
};