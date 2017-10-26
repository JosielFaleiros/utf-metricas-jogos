var mongoose = require("mongoose")

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
  }
})

module.exports = mongoose.model('Time', TimeSchema)
