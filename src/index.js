//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS

const express = require('express'); //IMPORTANTO O EXPRESS

const path = require('path'); //IMPORTANTO PATH

//O PATH RETORNA O CAMINHO DE FORMA DINAMICA

const app = express();

const router = express.Router()

//ISSO PERMITE QUE A GENTE CRIE DIFERENTE URLS E ENDPOINTs PARA O FRONTEND POSSA FAZER CHAMADAS

router.get("/", (req, res)=>{ //REQ = REQUISIÇÃO | RES = RESPOSTA
res.sendFile(path.join(__dirname + '/pages/home.html'))

})

//DENTRO DO GET JÁ DEFINIMOS UMA FUNÇÃO ANONIMA CALLBACK, QUE

app.use(router);

//APÓS DECLARAR NOSSAS ROTAS, AQUI FALAMOS PARA NOSSO APP USAR router COMO REFERENCIA

app.listen(3333, ()=>{
    console.log('Servidor rodando');
})