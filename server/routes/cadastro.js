module.exports = function(app) {

    const mongoose = require('mongoose')

    // Model
    require('../models/userModel')
    const Produto = mongoose.model("produtos")

    // Conexão db
    require('../config/db_connection')
    
    app.post('/cadastrar', function (req, res) {

      const novoProduto = new Produto({
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        preco: req.body.preco,
        preco_venda: req.body.preco_venda
      })

      novoProduto.save()

      console.log({message: "Cadastro efetuado com sucesso !", produto: novoProduto})
    })
}