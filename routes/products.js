const router = require('express').Router();
const models = require('../models');
const Products = models.Products; 

router.get("/", (req, res) => { Products.findAll()
  .then(product => {
    res.send(product);
  });
});

router.get("/:id", (req, res) => { Products.findOne({where: {id: req.params.id }})
  .then(product => {
    res.send(product);
  });
});

router.post("/", (req, res) => { Products.create(req.body)
  .then(product => {
    res.status(201).send(product);
  });
});

router.put("/:id", (req, resp) => {Products.update({...req.body}, {where: {id: req.params.id}})
  .then( () => {
    Products
      .findByPk(req.params.id)
      .then(product => resp.send(product.dataValues));
  })
})

router.delete("/:id", (req, res) => { Products.destroy({where: {id:req.params.id }})
  .then(() => res.sendStatus(200));
});

module.exports = router;