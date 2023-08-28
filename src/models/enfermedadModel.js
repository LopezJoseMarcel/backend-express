const mongoose = require('mongoose');

const enfermedadSchema = new mongoose.Schema({
  id_tratamiento: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  sintomas: {
    type: [String],
    required: true
  },
  causas: {
    type: [String],
    required: true
  },
  numero_diccionario: {
    type : Number ,
  }
});

const enfermedad = mongoose.model('enfermedad', enfermedadSchema, 'enfermedad');

module.exports = enfermedad;
