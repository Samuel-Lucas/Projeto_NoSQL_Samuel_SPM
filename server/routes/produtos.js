module.exports = function(application) {

	const mongoose = require('mongoose')

		// Model
		require('../models/userModel')
		const Produto = mongoose.model("produtos")
		
		// Conexão db
		require('../config/db_connection')

	application.get('/produtos', async (req, res) => {

		const produtosResponse = await Produto.find()
    	const result = await produtosResponse

   		res.json(result)
	})
}