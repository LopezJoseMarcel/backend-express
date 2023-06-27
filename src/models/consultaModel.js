const mongoose = require('mongoose');

const examenFisicoSchema = new mongoose.Schema({
  piel: {
    color: { type: String },
    turgencia: { type: String },
    m_p_v_p_c_h: [{ type: String }],
  },
  faneras: {
    pelo: { type: String },
    unhas: { type: String },
  },
  tejidos: {
    celu_subcutaneo: { type: String },
  },
});

const diagnosticoSchema = new mongoose.Schema({
  diagnostico_final: [{ type: mongoose.Schema.Types.ObjectId }],
  diagnostico_presuntivo: [{ type: mongoose.Schema.Types.ObjectId }],
});

const tratamientoSchema = new mongoose.Schema({
  tratamiento_enfer_final: {type: mongoose.Schema.Types.ObjectId},
  tratamiento_enfer_pre: {type: mongoose.Schema.Types.ObjectId}
})

const consultaSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  cita_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  motivo_consulta: { type: String, required: true },
  examen_fisico: { type: examenFisicoSchema },
  diagnostico: { type: diagnosticoSchema },
  tratamiento: { type: tratamientoSchema},
});

module.exports = mongoose.model('consulta', consultaSchema, 'consulta');
