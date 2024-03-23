const express = require( 'express' );
const tratamientoModel = require( '../models/tratamientoModel' );
const { default: mongoose } = require('mongoose');

const tratamientoRouter = express.Router();

//create a tratamiento

tratamientoRouter.post('/tratamientos', (req, res) => {
  const tratamiento = tratamientoModel(req.body);
  tratamiento.save()
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
});

//get all tratamientos
tratamientoRouter.get('/tratamientos', (req, res) => {
  tratamientoModel.find()
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
})

//get a tratamiento by id
tratamientoRouter.get('/tratamientos/:id', (req, res) => {
  const id = req.params.id;
  tratamientoModel.findById(id)
  .then(data => res.json(data))
  .catch(error => res.json({message: error}));
})

//get tratamiento whit its disease
tratamientoRouter.get('/tratamiento-disease/:id', (req, res) => {
  const id = req.params.id;
  tratamientoModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id) // Reemplaza con el ID del tratamiento que deseas consultar
      }
    },
    {
      $lookup: {
        from: "medicamento",
        localField: "medicamento_id",
        foreignField: "_id",
        as: "medicamento_info"
      }
    }
  ])
  .then(data => res.json(data))
  .catch(error => res.json({message: error}));
})

//update

tratamientoRouter.put('/tratamientos/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  tratamientoModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Update or create valoracion in tratamiento
tratamientoRouter.put('/tratamientos_valoracion/:id', (req, res) => {
  const id = req.params.id;
  const { valoracion } = req.body;

  tratamientoModel.findById(id)
    .then(tratamiento => {
      // Si el tratamiento no tiene la clave 'valoracion', la crea
      if (!tratamiento.valoracion) {
        tratamiento.valoracion = valoracion;
      } else {
        // Si ya tiene la clave 'valoracion', simplemente la actualiza
        tratamiento.valoracion = valoracion;
      }

      return tratamiento.save();
    })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});


//delete
tratamientoRouter.delete('/tratamientos/:id', (req, res) => {
  const id = req.params.id;
  tratamientoModel.deleteOne({_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({message: error}));
})

module.exports = tratamientoRouter;