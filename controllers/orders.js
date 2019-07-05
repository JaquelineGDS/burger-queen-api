const models = require('../models');
const Orders = models.Orders; 
const Products = models.Products; 
const User = models.User;
const OrderProducts = models.OrderProducts;

const getOrders =  (req, res) =>  Orders.findAll({include: [{model: OrderProducts, include: [Products], User}]})
  .then(order => res.send(order));

const getOrdersById =  (req, res) => Orders.findOne(req.params.id, {include: [{model: OrderProducts, include: [Products], User}]})
  .then(order => order ? res.send(order): res.sendStatus(404));

const createOrders = (req, res) => Orders.create(req.body, {include: [OrderProducts]})
  .then(order => {
    res.status(201).send(order);
});

const UpdateOrders = (req, resp) =>  Orders.update({...req.body}, {where: {id: req.params.id}})
  .then( () => {
    Orders
      .findByPk(req.params.id)
      .then(order => resp.send(order));
  });

const deleteOrders =  (req, res) => { 
  OrderProducts.destroy({where: { orderId: req.params.id}});
  Orders.destroy({where: { id: req.params.id}})
    .then(() => res.sendStatus(200));
};

module.exports = module.exports = {
  getOrders,
  getOrdersById,
  createOrders,
  UpdateOrders,
  deleteOrders
};