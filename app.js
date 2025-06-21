const express = require('express'); /*Importando o express */
const app = express(); /*Instância do express */
app.use((req /*REQUISIÇÃO (REQUEST)*/, res /*RESPOSTA (RESPONSE)*/, next /*CHAMAR OUTRO MÉTODO*/) => {
    res.status(200).send({
        mensagem: 'Ok, Deu certo'
    });
});

module.exports = app;