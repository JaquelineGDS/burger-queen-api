'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.REAL
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrdersProducts,{foreignKey: 'productId'});
  };
  // Products.create({name:'Café americano', price: 5});
  // Products.create({name:'Café com leite', price: 7});
  // Products.create({name:'Sanduíche de presunto e queijo', price: 10});
  // Products.create({name:'Suco de fruta natural', price: 10});
  // Products.create({name:'Hambúrguer simples carne bovina', price: 10});
  // Products.create({name:'Hambúrguer simples frango', price: 10});
  // Products.create({name:'Hambúrguer simples vegetariano', price: 10});
  // Products.create({name:'Hambúrguer duplo carne bovina', price: 10});
  // Products.create({name:'Hambúrguer duplo frango', price: 10});
  // Products.create({name:'Hambúrguer duplo vegetariano', price: 10});
  // Products.create({name:'Hambúrguer simples carne bovina', price: 10});
  // Products.create({name:'Hambúrguer simples frango', price: 10});
  // Products.create({name:'Batata frita ', price: 5});
  // Products.create({name:'Aneis de cebola ', price: 5});
  // Products.create({name:'Água 500ml	', price: 5});
  // Products.create({name:'Água 750ml', price: 7});
  // Products.create({name:'Bebida gaseificada 500mll', price: 5});
  // Products.create({name:'Bebida gaseificada 750mll', price: 7});
  return Products;
};