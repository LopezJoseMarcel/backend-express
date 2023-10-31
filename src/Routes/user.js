const express = require('express');
const userModel = require('../models/userModel')

const userRouter = express.Router();

//create user
userRouter.post('/usuarios', async (req, res) => {
  const user = userModel(req.body);
  console.log(req.body);

  // Check if the email already exists
  const foundUser = await userModel.findOne({ email: req.body.email });

  // If the user exists, return an error
  if (foundUser) {
    res.status(409).json({ message: 'El correo electrónico ya existe' });
    return;
  }

  // The user does not exist, so save them
  user
    .save()
    .then(data => res.json(data))
    .catch( error => res.json({message: error}));
});

//get all consultas with is user

userRouter.get('/usuario_consultas', (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "consulta",
          localField: "_id",
          foreignField: "usuario_id",
          as: "consulta",
        },
      },
      {
        $unwind: '$consulta',
      },
    ];

    const response = userModel.aggregate(pipeline)
    .then(result => res.json(result))
    .catch(error => {
      res.status(500).json({ error: 'Error al obtener las consultas' })
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas' });
  }
});


//get all users
userRouter.get('/usuarios', (req, res) => {
  userModel
  .find()
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});
//get a specific user
userRouter.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  userModel
  .findById(id)
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});

//update a user
userRouter.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;

  userModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

userRouter.put('/usuarios', (req, res) => {
  const email = req.query.email; // Obtiene el valor del parámetro 'email' en la consulta
  const updateFields = req.body;

  userModel.findOneAndUpdate({ email: email }, { $set: updateFields }, { new: true })
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    })
    .catch(error => res.json({ message: error }));
});

//delete a user 
userRouter.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  userModel
  .deleteOne({_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});



module.exports = userRouter;