const express = require ("express");
const app = express();
app.use(express.json());

const db = require('./models/index');

app.listen(4567, console.log("servidor rodando"));

app.get('/', (req, resp) => {
  resp.send( res.json(
    {
      "name": "bq-node",
      "version": "1.0.0"
    }
  ));
});
app.use("/users", require('./routes/user'));
app.use("/products", require('./routes/products'));
app.use("/orders", require('./routes/orders'));


db.sequelize.sync();