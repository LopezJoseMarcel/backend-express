const express = require('express');
const informacion_modelModel = require('../models/informacion_modelModel.js');

const model_infoRouter = express.Router();

// Create a medicamento
model_infoRouter.post('/model_info', (req, res) => {
  const info = informacion_modelModel(req.body);
  info.save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Get a medicamento by id
model_infoRouter.get('/model_info/:id', (req, res) => {
  const id = req.params.id;
  informacion_modelModel.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Get a model_info by numero de diccionario
model_infoRouter.get('/model_info', (req, res) => {
    const numero_diccionario = req.query.numero_diccionario;
    if (numero_diccionario) {
      informacion_modelModel.find({"numero_diccionario": numero_diccionario})
      .then(data => res.json(data))
      .catch(error => res.json({ message: error }));
    } else {
      informacion_modelModel.find()
      .then(data => res.json(data))
      .catch(error => res.json({ message: error }));
    }
    
  });

// Update a medicamento
model_infoRouter.put('/model_info/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  informacion_modelModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

model_infoRouter.put('/model_info', (req, res) => {
  const numero_diccionario = req.query.numero_diccionario;
  const updateFields = req.body;

  informacion_modelModel.findOneAndUpdate(
    { numero_diccionario: numero_diccionario },
    { $set: updateFields },
    { new: true } // Esto devuelve el documento actualizado en la respuesta
  )
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Delete a medicamento
model_infoRouter.delete('/model_info/:id', (req, res) => {
  const id = req.params.id;
  informacion_modelModel.deleteOne({ _id: id })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

module.exports = model_infoRouter;
