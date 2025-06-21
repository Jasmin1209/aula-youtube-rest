const express = require ('express');
const router = express.Router();


//RETORNA TODOS OS PEDIDO
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retornando os pedidos'
    });
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
        res.status(200).send ({
            mensagem: 'Detalhes do pedido', 
            id_pedido: id
        });
});

//ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado'
    });
});

//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido deletado'
    });
});

module.exports = router;