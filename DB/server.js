const express = require('express');
const cors = require('cors');
const path = require('path');
const pool =  require('./db'); // puxa o arquivo js

const app = express(); // so ta passando o express pra dentro do app
app.use(cors()); // é o filtro antes de todas as rotas 
app.use(express.json()); // tudo vai usar o json express

// rota para o index.html 
app.get('/', (req, res) =>{ // primeira rota que puxa a raiz do servidor 
    res.sendFile(path.join(__dirname, 'index.html')); // é a resposta do servidr que ostra oq estiver no index
});

app.listen(3000);