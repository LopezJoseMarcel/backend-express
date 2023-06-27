//import { format } from "date-fns/fp/format";
const { format } = require('date-fns');
const express = require('express');
const citaModel = require('../models/citaModel');
const { default: mongoose } = require('mongoose');
const systemFecha = new Date();
const fecha_actual = format(systemFecha,'yyyy-MM-dd').toString();
const mes = format(systemFecha,'MM');
 

const citaRouter = express.Router();

//create cita
citaRouter.post('/citas', (req, res) => {
  const cita = citaModel(req.body);
  cita
  .save()
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
});
//get next citas
citaRouter.get('/citas-next/:id', (req, res) => {
  const id = req.params.id;
  citaModel.find({usuario_id: new mongoose.Types.ObjectId(id) ,fecha: {$gte :fecha_actual}}).sort({fecha: 1})
  .then(data => res.json(data))
  .catch(error => res.json({message: error})) 
})

//get citas using date 
citaRouter.get('/citas-fecha/:fecha', (req, res) => {
  const fechaP = req.params.fecha;
  citaModel.find({fecha: fechaP}).sort({fecha: 1})
  .then(data => res.json(data))
  .catch(error => res.json({message: error})) 
})

//get old citas
citaRouter.get('/citas-last/:id', (req, res) => {
  const id = req.params.id;
  citaModel.find({usuario_id: new mongoose.Types.ObjectId(id) ,fecha: {$lt :fecha_actual}}).sort({fecha: 1})
  .then(data => res.json(data))
  .catch(error => res.json({message: error})) 
})

//get specific cita with the cita's id
citaRouter.get('/citas/:id', (req, res) => {
  const id = req.params.id;
  citaModel.findById(id)
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
})
//get citas with the usuario_id
citaRouter.get('/citas/usuario/:id', (req, res) => {
  const id = req.params.id;
  citaModel.find({usuario_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))
})
//get all citas/ get current cita / get citas del mes
citaRouter.get('/citas', (req, res) => {

  if (req.query.del === 'dia') {
   return citaModel.find({fecha: fecha_actual})
          .then(data => res.json(data))
          .catch(error => res.json({message: error}))
  } else if(req.query.del === 'mes') {
    return citaModel.find({ fecha: { $regex: new RegExp('-' + mes + '-') } })
           .then(data => res.json(data))
           .catch(error => res.json({message: error}))
  }
  
  citaModel.find()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//updates

citaRouter.put('/citas/:id', (req, res) => {
  const id = req.params.id;
  const {usuario_id, fecha, turno} = req.body;

  citaModel.updateOne({_id: id},{
    $set:{ usuario_id, fecha, turno}
  })
  .then(data => res.json(data))
  .catch(error => res.json({message: error}))

});

//delete a cita
citaRouter.delete('/citas/:id', (req, res) => {
  const id = req.params.id;
  citaModel
  .deleteOne({_id : id})
  .then(data => res.json(data)) 
  .catch(error => res.json({ message: error}))
})




module.exports = citaRouter;



