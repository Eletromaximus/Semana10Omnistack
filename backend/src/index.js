const express = require('express');
const mongoose = require('mongoose');//
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mmongodb+srv://Maximus:Max48273Xz@cluster0-cge6j.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3333);
//Métodos HTTP: GET, POST, PUT, DELETE

//TIPOS de parâmetros
//Query params: req.query(Filtros, ordenação, paginação, ...)
//Route Params:request.paramas(identificar um recurso na identificação, remoção)
//Body params: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não - Relacional)