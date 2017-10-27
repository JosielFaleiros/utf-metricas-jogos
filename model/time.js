var mongoose = require("mongoose")
var models = require('./')

var TimeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  pontos: {
    type: Number,
    required: true,
    default: 0
  },
  golsPro: {
    type: Number,
    required: true,
    default: 0
  },
  golsContra: {
    type: Number,
    required: true,
    default: 0
  },
  jogadores: [models.jogador.schema]
})

TimeSchema.statics.getAll = async function () {
  return await this.find().sort('-pontos')
}

TimeSchema.statics.byId = async function (id) {
  return await this.findById(id).populate('jogadores.cidade')
}

TimeSchema.statics.new = async function (time) {
  novoTime = new this(time)
  return await novoTime.save()
}

TimeSchema.methods.newJogador = async function (jogador) {
  this.jogadores.push(jogador)
  return await this.save()
}

module.exports = mongoose.model('Time', TimeSchema)
