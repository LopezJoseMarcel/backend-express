const mongoose = require('mongoose');

const medicamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  presentacion: { type: String, required: true },
  descripcion: { type: String, required: true },
  usos: { type: [String], required: true },
  efectos_secundarios: { type: [String], required: true },
  administracion: { type: [String], required: true },
  numero_diccionario: {
    type : Number ,
  },
  dosis_alert: { type : Number },
});

module.exports = mongoose.model('medicamento', medicamentoSchema, 'medicamento');
