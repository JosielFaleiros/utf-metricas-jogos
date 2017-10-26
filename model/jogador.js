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
  },
  time: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Time',
    required: true
  }
})

JogadorSchema.statics.byIdTime = async function (time) {
  return await this.find({time: time}).populate('cidade').sort('nome')
}

JogadorSchema.statics.new = async function (jogador) {
  novoJogador = new this(jogador)
  return await novoJogador.save()
}

module.exports = mongoose.model('Jogador', JogadorSchema)
