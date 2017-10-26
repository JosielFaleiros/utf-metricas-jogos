var mongoose = require("mongoose")

var JogadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  rua: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  cidade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cidade',
    required: true
  }
})

module.exports = mongoose.model('Jogador', JogadorSchema)
