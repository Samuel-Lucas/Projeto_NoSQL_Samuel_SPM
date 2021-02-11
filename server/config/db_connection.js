const mongoose = require('mongoose')

function connect() {
    mongoose
    .connect('mongodb://localhost/games_shelter', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Conectado com o Banco 'games_shelter' !")
    }).catch((error) => {
        console.log('Erro ao tentar a conexão: ' + error)
    })
}

module.exports = connect()