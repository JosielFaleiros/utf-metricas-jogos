var mongoose = require("mongoose")

var DetalheSumulaSchema = new mongoose.Schema({
  jogador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Jogador',
    required: false
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
