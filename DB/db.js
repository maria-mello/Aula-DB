const {Pool} = require("pg") //dentro do Pool a gente coloca as credenciais, cria a carteira de identidade do sistema; 

const pool = new Pool({ //informações do banco
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    port: 5432,
    password: 'senai'
});

//se for string vai ser = chave: '123',
//se for inteiro é sem aspas.

pool.connect()
.then(() => console.log("Conectado ao PostgreSQL")) // vai ver se fez a conexão e aparecer no terminal;
.catch(err => console.log("Erro de conexão", err));  // vai ver se tem erro e vai pegar o tipo do erro;

module.exports = pool;

// se decorar isso aq essa parte ta pronto!!!!

// Sumário

// req = requisição e res resposta 


// npm = node package manager;
// express = automatiza as rotas do banco; 
// nodemon = automatiza o servidor; 
// dotenv = sao os arquivos que configuram o ambiente (.env);
// cors (ORM) = é quando tem que comunicar o (js/node) para uma linguagem orientada a tabelas (SQL);

// PARA INSTALAR NO TERMINAL PARA CONEXÃO
//  npm install pg express nodemon dotenv cors
