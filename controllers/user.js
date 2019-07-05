const models = require('../models');
const User = models.User; 

const getUser = (req, res) => User.findAll()
  .then(users => {
    res.send(users);
  });

const getUserById = (req, res) => User.findOne({where: {id: req.params.id }})
  .then(user => {
    res.send(user);
  });

const createUser = (req, res) =>  User.create(req.body)
  .then(user => {
    res.status(201).send(user);
  });

const updateUser = (req, resp) => User.update({...req.body}, {where: {id: req.params.id}})
  .then( () => {
    User
      .findByPk(req.params.id)
      .then(user => resp.send(user.dataValues));
  });

const deleteUser =  (req, res) => User.destroy({where: {id:req.params.id }})
  .then(() => res.sendStatus(200));

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};