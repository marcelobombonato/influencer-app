const express = require ('express');
const routes = require('./routes');
require('./database');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) =>{
    const erro = new Error('Not found.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

app.listen(3333);