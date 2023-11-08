const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    res.json({ mensagem: "Teste" });
});


app.listen(3000);