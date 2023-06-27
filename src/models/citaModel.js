const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  full_name: {
    type: String
  }
  ,
  fecha: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    required: true
  },
  estado: {
    type: String
  }
});

const cita = mongoose.model('cita', citaSchema,'cita');



module.exports = cita;






