const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produto = new Schema({
    categoria: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
	preco_venda: {
        type: Number,
        required: true
    }
})

mongoose.model('produtos', Produto) // Cria collection 'usuarios' com base no Schema Produto