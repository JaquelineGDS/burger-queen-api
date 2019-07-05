const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders; 
const Products = models.Products; 
const User = models.User;
const OrderProducts = models.OrderProducts;


router.get("/", (req, res) => { Orders.findAll({include: [{model: OrderProducts, include: [Products], User}]})
  .then(order => order ? res.send(order) : res.sendStatus(400)
  );
});

router.get("/:id", (req, res) => { Orders.findOne({where: {id: req.params.id }})
  .then(product => {
    res.send(product);
  });
});

router.post("/", (req, res) => { Orders.create(req.body, {include: [{model: OrderProducts, include: [Products], User}]})
  .then(product => {
    res.status(201).send(product);
  });
});

// router.put("/:id", (req, resp) => {Orders.update({...req.body}, {where: {id: req.params.id}})
//   .then( () => {
//     Orders
//       .findByPk(req.params.id)
//       .then(product => resp.send(product.dataValues));
//   })
// })

// router.delete("/:id", (req, res) => { Orders.destroy({where: {id:req.params.id }})
//   .then(() => res.sendStatus(200));
// });

module.exports = router;