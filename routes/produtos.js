const express = require ('express');
const router = express.Router();


//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retornando todos os produtos'
    });
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    const produto = { //OBJETO PRODUTO COM PROPRIEDADES DE NOME E PREÇO NO FORMATO JSON
        nome: req.body.nome,
        preco: req.body.preco
    }
    res.status(201).send({
        mensagem: 'Inserindo um produto',
        produtoCriado: produto
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if(id == 'especial'){
        res.status(200).send ({
            mensagem: 'Você descobriu o id Espescial', 
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Você passou um id'
        });
    }
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Alterando um produto'
    });
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deletando um produto'
    });
});

module.exports = router;