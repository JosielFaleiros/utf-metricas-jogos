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
