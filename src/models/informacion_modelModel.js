const mongoose = require('mongoose');

// Define el esquema
const schema = new mongoose.Schema({
  numero_diccionario: {
    type: Number,
    required: true,
  },
  input:{
    type: [[Number]],
    default: [],
  }
  ,
  output1: {
    type: [[Number]],
    default: [],
  },
  output2: {
    type: [[Number]],
    default: [],
  },
  output3: {
    type: [[Number]],
    default: [],
  },
  output4: {
    type: [[Number]],
    default: [],
  },
  output5: {
    type: [[Number]],
    default: [],
  },
  output6: {
    type: [[Number]],
    default: [],
  },
});

// Crea el modelo
const informacion_modelModel = mongoose.model('informacion_modelo', schema, 'informacion_modelo');

module.exports = informacion_modelModel;
