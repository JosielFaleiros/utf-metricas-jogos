var mongoose = require("mongoose")

var CidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
})

CidadeSchema.statics.getAll = async function () {
  return await this.find().sort('nome').exec();
}

CidadeSchema.statics.new = async function (cidade) {
  novaCidade = new this(cidade)
  return await novaCidade.save()
}

module.exports = mongoose.model('Cidade', CidadeSchema)
