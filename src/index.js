
//****1 - Criação de uma aplicação express****

const express = require('express'); //IMPORTANTO O EXPRESS

const path = require('path'); //IMPORTANTO PATH

//O PATH RETORNA O CAMINHO DE FORMA DINAMICA

//****2 - Configuração do Banco de Dados MySQL****
const db = require('./db'); //IMPORTANDO O NOSSO MÓDULO DE CONEXÃO COM O BANCO

const app = express();

//****3 - Configuração de Rotas****
const routes = require('./routes'); //CHAMANDO O MODULO DAS ROTAS

app.use (express.json()); //AQUI TRANSFORMAMOS OS DADOS QUE CHEGAM COMO BINARIO EM JSON 

app.use('/', routes); //APOS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO APP USAR ELAS COMO REFERENCIA

app.listen(3333, ()=>{
    console.log('Servidor rodando');
})


