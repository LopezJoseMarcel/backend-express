const express = require('express');
const informacion_modelModel = require('../models/informacion_modelModel.js');

const tf = require('@tensorflow/tfjs-node');
const normalize = require('../machineLearning/medicalModel/Utils/normalize.js');

const create_directory = require('../utils/create_directory.js');
const createObject = require('../utils/createObject.js')

const train_infoRouter = express.Router();

// Get a model_info by numero de diccionario
train_infoRouter.get('/trainDisease', (req, res) => {
    const numero_diccionario = req.query.numero_diccionario;
      informacion_modelModel.find({"numero_diccionario": numero_diccionario})
      .sort({"output1.0.0": 1})
      .then(data => {

        const objeto = createObject(data);
        console.log(objeto);
        const create_directoryC = create_directory(numero_diccionario,objeto);
        console.log(create_directoryC);
        for (let i = 1; i <= Object.keys(objeto).length; i++) {

            const INPUTS = objeto[`input${i}`].input;
            const OUTPUTS = objeto[`input${i}`].output;
            
            tf.util.shuffleCombo(INPUTS, OUTPUTS);
            
            const INPUT_TENSOR = tf.tensor2d(INPUTS);
            const OUTPUTS_TENSOR = tf.tensor2d(OUTPUTS);
            
            const normalizedInputs = normalize(INPUT_TENSOR);
            const normalizedOutputs = normalize(OUTPUTS_TENSOR);
            
            const model = tf.sequential();
            
            model.add(tf.layers.dense({ inputShape: [5], units: 64, activation: 'relu' }));
            model.add(tf.layers.dropout({ rate: 0.2 }));
            model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
            model.add(tf.layers.dropout({ rate: 0.2 }));
            model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
            model.add(tf.layers.dropout({ rate: 0.2 }));
            model.add(tf.layers.dense({ units: 5, activation: 'linear' }));
            
            model.summary();
            train();
            
            async function train() {
              model.compile({
                optimizer: tf.train.adam(0.001), // Ajusta la tasa de aprendizaje
                loss: 'meanAbsoluteError',// meanAbsoluteError meanSquaredError
                metrics: ['accuracy']
              });
            
              let results = await model.fit(normalizedInputs.NORMALIZED_VALUES, normalizedOutputs.NORMALIZED_VALUES, {
                epochs: 300, // Aumenta el número de épocas
                batchSize: 10,
                shuffle: true,
                callbacks: { onEpochEnd: logProgress }
              });
               
               //const nameModel = `model${numero_diccionario}0${i}`
               await model.save(`file:///mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models${numero_diccionario}/medicalModel${numero_diccionario}0${i}`);
                             
              normalizedOutputs.NORMALIZED_VALUES.dispose();
              //data
              evaluate([55, 1, 10, 2, 29]);
              res.json({"result":'ok'});// <--
            }
            
            function evaluate(value) {
              tf.tidy(function () {
                let newInput = normalize(tf.tensor2d([value]), normalizedInputs.MIN_VALUE, normalizedInputs.MAX_VALUE);
                let normalizedPredictions = model.predict(newInput.NORMALIZED_VALUES);
                let denormalizedPredictions = denormalize(normalizedPredictions, normalizedOutputs.MIN_VALUE, normalizedOutputs.MAX_VALUE);
                denormalizedPredictions.print();
              });
              normalizedInputs.MIN_VALUE.dispose();
              normalizedInputs.MAX_VALUE.dispose();
              normalizedOutputs.MIN_VALUE.dispose();
              normalizedOutputs.MAX_VALUE.dispose();
              model.dispose();
              console.log(tf.memory().numTensors);
            } 
            
        }
      })
      .catch(error => res.json({ message: error }));
  });





function logProgress(epoch, logs) {
  console.log('Data for epoch ' + epoch, logs);
}

function denormalize(predictions, minValues, maxValues) {
  const range = tf.sub(maxValues, minValues);
  const denormalizedValues = tf.mul(predictions, range);
  const denormalizedOutputs = tf.add(denormalizedValues, minValues);
  return denormalizedOutputs;
}


train_infoRouter.get('/object-disease', (req, res) => {
  const numero_diccionario = req.query.numero_diccionario;
    informacion_modelModel.find({"numero_diccionario": numero_diccionario})
    .then(data => {
      const objeto = createObject(data)
      res.json(objeto)
    })
    .catch(error => res.json({ message: error }))

})

module.exports = train_infoRouter;