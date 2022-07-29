const express = require ('express');
const app = express();

app.get('/', (request, response) => {
    response.json({nome: 'emanuele', cognome: 'braco'})
    response.status(200);
})

const port = 3000;

app.listen(port, () => {
    console.log(`[Server]: Server running at http://localhost:${port}`)
}) 

module.exports = app;