const express = require('express'); //IMPORTANTO O EXPRESS
const path = require('path'); //IMPORTANDO O PATH
//O PATH RETORNA O CAMINHO DE FORMA DINAMICA

const router = express.Router();
// ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs e ENDPOINTs PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/", (req, res) => { //REQ = REQUISIÇÃO | RES = RESPOSTA
    res.sendFile(path.join(__dirname + '/pages/home.html'))

})

const clienteController = require('./clienteController');
//CHAMANDO O ARQUIVO QUE CONTROLA O CLIENTE

router.get('/clientes', clienteController.listarClientes);

module.exports = router;