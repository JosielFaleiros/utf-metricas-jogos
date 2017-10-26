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

TimeSchema.statics.getAll = async function () {
  return await this.find().sort('-pontos')
}

TimeSchema.statics.byId = async function (id) {
  return await this.findById(id)
}

TimeSchema.statics.new = async function (time) {
  novoTime = new this(time)
  return await novoTime.save()
}

module.exports = mongoose.model('Time', TimeSchema)
