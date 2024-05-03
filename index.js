const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

// Configuração do CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Middleware para processar JSON
app.use(express.json());

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Usar as rotas definidas
app.use('/api', routes);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

// Parâmetros passados pela linha de comando
var userArgs = process.argv.slice(2);
var mongoURL = userArgs[0];

// Conexão com o Banco de Dados
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Database connection error:', error);
});

db.once('connected', () => {
    console.log('Database connected');
});
