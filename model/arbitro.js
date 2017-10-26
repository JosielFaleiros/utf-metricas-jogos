var mongoose = require("mongoose")

var ArbitroSchema = new mongoose.Schema({
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

ArbitroSchema.statics.getAll = async function () {
  return await this.find().populate('cidade').sort('nome')
}

ArbitroSchema.statics.new = async function (arbitro) {
  novoArbitro = new this(arbitro)
  return await novoArbitro.save()
}

module.exports = mongoose.model('Arbitro', ArbitroSchema)
