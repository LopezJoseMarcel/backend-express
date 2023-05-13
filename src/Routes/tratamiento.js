const express = require( 'express' );
const tratamientoModel = require( '../models/tratamientoModel' );

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

//

//update

tratamientoRouter.put('/tratamientos/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  tratamientoModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
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