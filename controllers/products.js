const models = require('../models');
const Products = models.Products; 

const getProduct = (req, res) => Products.findAll()
  .then( product => res.send(product));

const getProductById =  (req, res) => Products.findOne({where: {id: req.params.id }})
  .then(product => res.send(product));

const createProduct = (req, res) => Products.create(req.body)
  .then(product => res.status(201).send(product));

const updateProduct =  (req, resp) => Products.update({...req.body}, {where: {id: req.params.id}})
  .then( () => {
    Products
      .findByPk(req.params.id)
      .then(product => resp.send(product.dataValues));
  });

const deleteProduct = (req, res) =>  Products.destroy({where: {id:req.params.id }})
  .then(() => res.sendStatus(200));

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};