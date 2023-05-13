const express = require('express');
const userModel = require('../models/userModel')

const userRouter = express.Router();

//create user
userRouter.post('/usuarios', (req, res) => {
  const user = userModel(req.body);
  console.log(req.body);
  user
  .save()
  .then(data => res.json(data))
  .catch( error => res.json({message: error}));
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

//delete a user 
userRouter.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  userModel
  .deleteOne({_id : id})
  .then(data => res.json(data))
  .catch(error => res.json({ message: error}))
});



module.exports = userRouter;