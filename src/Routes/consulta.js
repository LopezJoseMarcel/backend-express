const express = require('express');
const consultaModel = require('../models/consultaModel');

const consultaRouter = express.Router();

//create a consulta 
consultaRouter.post('/consultas', (req, res) => {
    const consulta = consultaModel(req.body);
    consulta
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
  });

//get all consultas with is cita

consultaRouter.get('/consultas_citas', (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: 'cita',
          localField: 'cita_id',
          foreignField: '_id',
          as: 'cita',
        },
      },
      {
        $unwind: '$cita',
      },
    ];

    const response = consultaModel.aggregate(pipeline)
    .then(result => res.json(result))
    .catch(error => {
      res.status(500).json({ error: 'Error al obtener las consultas' })
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas' });
  }
});

consultaRouter.get('/consultas_usuario', (req, res) => {
  try {
    const pipeline = [
      {
        $project: {
          usuario_id: 1,
          diagnostico: 1
        }
      },
      {
        $lookup: {
          from: 'usuario',
          localField: 'usuario_id',
          foreignField: '_id',
          as: 'usuario'
        }
      },
      {
        $unwind: '$usuario'
      },
      {
        $project: {
          usuario_id: 1,
          diagnostico: 1,
          'usuario.nombre': 1, // Reemplaza 'nombre' con los campos que deseas
          'usuario.apellido': 1,
          'usuario.direccion':1,
          // Agrega más campos del usuario según tus necesidades
        }
      }
    ];

    const response = consultaModel.aggregate(pipeline)
      .then(result => res.json(result))
      .catch(error => {
        res.status(500).json({ error: 'Error al obtener las consultas' });
      });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas' });
  }
});




//get all consultas
consultaRouter.get('/consultas', (req, res) => {
  consultaModel.find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error}))  
});

//get a consulta by its id
consultaRouter.get('/consultas/:id', (req, res) => {
  const idConsulta = req.params.id;
  consultaModel.findById(idConsulta)
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
})

//get consulta by  cita-id 
consultaRouter.get('/consultas/cita/:id',(req, res) => {
  const citaId = req.params.id;
  consultaModel.find({cita_id: citaId})
    .then(data => res.json(data))
    .catch(error => res.json({ message: error}))
})
//get consulta by user-id
consultaRouter.get('/consultas/usuario/:id',(req, res) => {
  const usuarioId = req.params.id;
  consultaModel.find({usuario_id: usuarioId})
    .then(data => res.json(data))
    .catch(error => res.json({ message: error}))
})
//Update a consulta 
consultaRouter.put('/consultas/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  consultaModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//delete a consulta
consultaRouter.delete('/consultas/:id', (req, res) => {
  const id = req.params.id;
  consultaModel
  .deleteOne({_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});


module.exports = consultaRouter;