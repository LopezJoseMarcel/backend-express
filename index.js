const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();//environment variable
const app = express();
const uri = process.env.MONGODB_URI;
const userRouter  = require('./src/Routes/user.js');
const citaRouter = require('./src/Routes/cita.js');
const consultaRouter = require('./src/Routes/consulta.js');
const enfermedadRouter = require('./src/Routes/enfermedad.js');
const tratamientoModel = require('./src/Routes/tratamiento.js');
const medicamentoModel = require('./src/Routes/medicamento.js')
//middleware
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', citaRouter);
app.use('/api', consultaRouter);
app.use('/api', enfermedadRouter);
app.use('/api', tratamientoModel);
app.use('/api', medicamentoModel);

app.get('/', (req, res)=> {
  res.send("Welcome to the API of medical-project");
})


//port 
const PORT = process.env.PORT || 4000;  

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