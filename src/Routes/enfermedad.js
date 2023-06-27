const express = require( 'express' );
const enfermedadModel = require( '../models/enfermedadModel');

const enfermedadRouter = express.Router();

//create a enfermedad
enfermedadRouter.post('/enfermedades', (req, res) => {
  const enfermedad = enfermedadModel(req.body);

	enfermedad.save()
	.then(data => res.json(data))
	.catch(error => res.json({message: error}));
})

//get all enfermedades
enfermedadRouter.get('/enfermedades', (req, res) => {
  enfermedadModel.find()
	.then(data => res.json(data))
	.catch(error => res.json({message: error}));
})

//get a enfermedad by its id
enfermedadRouter.get('/enfermedades/:id', (req, res) => {
	const id = req.params.id; 
  enfermedadModel.findById(id)
	.then(data => res.json(data))
	.catch(error => res.json({message: error}));
})

//get a tatamiento_id by its id
enfermedadRouter.get('/enfermedades/tratamiento/:id', (req, res) => {
	const id = req.params.id; 
  enfermedadModel.find(
		{
			id_tratamiento: {
				$in:[id]
			}
		}
	)
	.then(data => res.json(data))
	.catch(error => res.json({message: error}));
})

//update
enfermedadRouter.put('/enfermedades/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  enfermedadModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

//update Array
enfermedadRouter.put('/enfermedades_tratamientos/:id', (req, res) => {
	const id = req.params.id;
	const updateFields = req.body;
  
	enfermedadModel.findByIdAndUpdate(id, { $push: { id_tratamiento: updateFields.id_tratamiento } }, { new: true })
	  .then(data => res.json(data))
	  .catch(error => res.json({ message: error }));
  });

//delete
enfermedadRouter.delete('/enfermedades/:id', (req, res) => {
  const id = req.params.id;
  enfermedadModel
  .deleteOne({_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});


module.exports = enfermedadRouter;
