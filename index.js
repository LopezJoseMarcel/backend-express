const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();//environment variable
const app = express();
const uri = process.env.MONGODB_URI;
const userRouter  = require('./src/Routes/user.js');
const citaRouter = require('./src/Routes/cita.js');
const consultaRouter = require('./src/Routes/consulta.js');
const enfermedadRouter = require('./src/Routes/enfermedad.js');
const tratamientoRouter = require('./src/Routes/tratamiento.js');
const medicamentoRouter = require('./src/Routes/medicamento.js')
const authTokenRouter = require('./src/Routes/auth_token');
const prediccionRouter = require('./src/Routes/medicalPrediction.js');
const model_infoRouter = require('./src/Routes/model_info.js');
const train_infoRouter = require('./src/Routes/trainDisease.js');

const cors = require('cors');
//middleware
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
app.use('/api', citaRouter);
app.use('/api', consultaRouter);
app.use('/api', enfermedadRouter);
app.use('/api', tratamientoRouter);
app.use('/api', medicamentoRouter);
app.use('/api', authTokenRouter);
app.use('/api', prediccionRouter);
app.use('/api', model_infoRouter);
app.use('/api', train_infoRouter);
app.get('/', (req, res)=> {
  res.send("Welcome to the API of medical-project");
})


//port 
const PORT = process.env.PORT || 8000;  

//connection to mongodb 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(error => console.error(error))

//open the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} ...`)
  
});