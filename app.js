const express = require('express'); /*Importando o express */
const app = express(); /*Instância do express */
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false})); //APENAS DADOS SIMPLES
app.use(bodyParser.json()); //JSON DE ENTRADA NO BODY

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*') // '*' indica o servidor que deseja que tenha acesso, ex: no lugar o asteristico seria 'http://servidor-especifico.com.br'
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//QUANDO NÃO ENCONTRA ROTA
app.use((req, res, next) => {
    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});

//QUANDO A ENTRADA DA PORTA DÁ ERRO
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});
module.exports = app;