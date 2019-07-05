const express = require ("express"); //servidor
const app = express();
app.use(express.json());

const db = require('./models/index');

app.listen(4567, console.log("servidor rodando")); //porta

app.use("/users", require('./routes/user')) //rota usuarios
app.use("/products", require('./routes/products')) //rota produtos

// app.use("/orders", require('./routes/orders')) //rota orders

db.sequelize.sync(); //sincronização com o banco

