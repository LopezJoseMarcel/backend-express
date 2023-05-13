const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contrasenha: {
    type: String,
    required: true,
    match: /^[A-Za-z0-9]{8,}$/
  },
  genero: {
    type: String
  },
  cedula: {
    type: String
  },
  fecha_nacimento: {
    type: String
  },
  rol: {
    type: String,
    enum: ['paciente', 'medico', 'admin']
  },
  tratamiento_activo: {
    type: Boolean
  },
  tratamiento: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  direccion: {
    type: {
      calle: {
        type: String
      },
      barrio: {
        type: String
      },
      ciudad: {
        type: String
      }
    }
  }
});

const usuario = mongoose.model('usuario', userSchema, 'usuario');

module.exports = usuario;