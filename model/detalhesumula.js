var mongoose = require("mongoose")

var DetalheSumulaSchema = new mongoose.Schema({
  jogador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Jogador',
    required: true
  },
  qtdeGol: {
    type: Number,
    required: true,
    default: 0
  },
  cartaoAmarelo: {
    type: Number,
    required: true,
    default: 0
  },
  cartaoVermelho: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('DetalheSumula', DetalheSumulaSchema)
