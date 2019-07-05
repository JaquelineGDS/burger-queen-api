const router = require('express').Router();
const models = require('../models'); //chamando models
const User = models.User; // rota user

router.get("/", (req, res) => { User.findAll()
  .then(users => {
    res.send(users);
  });
});

//paramentro de requisição "/:id"
router.get("/:id", (req, res) => { User.findOne({where: {id: req.params.id }})
  .then(user => {
    res.send(user);
  });
});

router.post("/", (req, res) => { User.create(req.body)
  .then(user => {
    res.status(201).send(user);
  });
});

// router.put("/:id", (req, resp) => { User.findOne({where: {id: req.params.id }})
//   .then( () => {
//     User.update(resp.body)
//     .then((user2) => resp.send(user2.dataValues));
//   })
// })

router.put("/:id", (req, resp) => {User.update({...req.body}, {where: {id: req.params.id}})
  .then( () => {
    User
      .findByPk(req.params.id)
      .then(user => resp.send(user.dataValues));
  })
})

router.delete("/:id", (req, res) => { User.destroy({where: {id:req.params.id }})
  .then(() => res.sendStatus(200));
});

//body parser

module.exports = router;