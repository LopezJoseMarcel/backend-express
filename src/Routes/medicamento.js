const express = require('express');
const medicamentoModel = require('../models/medicamentoModel.js');

const medicamentoRouter = express.Router();

// Create a medicamento
medicamentoRouter.post('/medicamentos', (req, res) => {
  const medicamento = medicamentoModel(req.body);
  medicamento.save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Get all medicamentos
medicamentoRouter.get('/medicamentos', (req, res) => {
  medicamentoModel.find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Get a medicamento by id
medicamentoRouter.get('/medicamentos/:id', (req, res) => {
  const id = req.params.id;
  medicamentoModel.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Update a medicamento
medicamentoRouter.put('/medicamentos/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  medicamentoModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// Delete a medicamento
medicamentoRouter.delete('/medicamentos/:id', (req, res) => {
  const id = req.params.id;
  medicamentoModel.deleteOne({ _id: id })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

module.exports = medicamentoRouter;
