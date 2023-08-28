const express = require( 'express' );
const prediccionMedica = require('../machineLearning/medicalModel/testModel.js'); 
const prediccionRouter = express.Router();

prediccionRouter.post('/prediccion', async (req,res) => {
    try {
      const { enfermedad, outputs, inputData } = req.body; // Esperamos un JSON con enfermedad, outputs e inputData
      const resultado = await prediccionMedica(enfermedad, outputs, inputData);
      res.json(resultado);    
    } catch (error) {
      res.status(500).json({ error: 'Error en la predicción' });
    }
})

module.exports = prediccionRouter;