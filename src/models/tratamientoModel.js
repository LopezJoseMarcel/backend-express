const mongoose = require('mongoose');

const tratamientoSchema = new mongoose.Schema({
  medicamento_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  cantidad_uso: {
    type: {
      cantidad: {
        type: Number,
        required: true,
      },
      unidad: {
        type: String,
        required: true,
      },
    },
  },
  frecuencia_diaria_hr: {
    type: String,
    required: true,
  },
  tratamiento_tiempo: {
    type: {
      fecha_inicio: {
        type: String,
        required: true,
      },
      fecha_fin: {
        type: String,
        required: true,
      },
    },
  },
});

const tratamientoModel = mongoose.model('tratamiento', tratamientoSchema,'tratamiento');

module.exports = tratamientoModel;
