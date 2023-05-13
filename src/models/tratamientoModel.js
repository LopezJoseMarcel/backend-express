const mongoose = require('mongoose');

const tratamientoSchema = new mongoose.Schema({
  medicamento_id: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicamento',
    }],
    validate: {
      validator: function(value) {
        return Array.isArray(value) && value.length > 0;
      },
      message: 'El campo medicamento_id debe ser un array con al menos un elemento',
    },
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
