var mongoose = require("mongoose")
var models = require('./')

var SumulaSchema = new mongoose.Schema({
  golTime1: {
    type: Number,
    required: true,
    default: 0
  },
  golTime2: {
    type: Number,
    required: true,
    default: 0
  },
  arbitro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Arbitro',
    required: true
  },
  time: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Time',
    required: true
  },
  time2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Time',
    required: true
  },
  detalheSumula: [models.detalhesumula.schema]

})

SumulaSchema.statics.getAll = async function () {
  return await this.find().populate('arbitro').populate('time').populate('time2')
}

SumulaSchema.statics.byId = async function (id) {
  return await this.findById(id).populate('arbitro').populate('time').populate('time2').
  populate('detalheSumula.jogador')
} 

SumulaSchema.statics.new = async function (sumula) {
  newsumula = new this(sumula)
  return await newsumula.save()
}

SumulaSchema.methods.newDetalheSumula = async function (detalheSumula) {
  this.detalheSumula.push(detalheSumula)
  return await this.save()
}

module.exports = mongoose.model('Sumula', SumulaSchema)
