
const tf = require('@tensorflow/tfjs-node');
const normalize = require('./Utils/normalize.js');
const DATA_MED = require('./Data/medicalData06.js');
const roundArrayValues = require('./Utils/Round.js');

const direcction = 'file:///mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models06/medicalModel0601/model0601.json';

const INPUTS = DATA_MED.INPUTS;
const OUTPUTS = DATA_MED.OUTPUTS1;

const INPUT_TENSOR = tf.tensor2d(INPUTS);
const OUTPUTS_TENSOR = tf.tensor2d(OUTPUTS);

const normalizedInputs = normalize(INPUT_TENSOR);
const normalizedOutputs = normalize(OUTPUTS_TENSOR);

async function cargarModelo() {
  const modeloGuardado = await tf.loadLayersModel(direcction);
  return modeloGuardado;
}

async function hacerPrediccion(inputData) {
  const modelo = await cargarModelo(direcction);
   
  let inputNormalized = normalize(tf.tensor2d(inputData)); // Asegúrate de que inputData sea un arreglo adecuado para tu modelo
  let normalizedPredictions = modelo.predict(inputNormalized.NORMALIZED_VALUES);
  let denormalizedPredictions = denormalize(normalizedPredictions, normalizedOutputs.MIN_VALUE, normalizedOutputs.MAX_VALUE);

  const roundedPredictions = roundArrayValues(denormalizedPredictions.arraySync()); // Redondea las predicciones

  inputNormalized.NORMALIZED_VALUES.dispose();
  normalizedPredictions.dispose();
  normalizedOutputs.MIN_VALUE.dispose();
  normalizedOutputs.MAX_VALUE.dispose();
  modelo.dispose();

  return roundedPredictions;
}

function denormalize(predictions, minValues, maxValues) {
  const range = tf.sub(maxValues, minValues);
  const denormalizedValues = tf.mul(predictions, range);
  const denormalizedOutputs = tf.add(denormalizedValues, minValues);
  return denormalizedOutputs;
}

async function main() {
    // Ejemplo de cómo usar la función de predicción
  const inputDataEjemplo = [[26, 1, 6, 3, 8]];
  const resultadoPrediccion = await hacerPrediccion(inputDataEjemplo);


 

  const objectPrediction = {
    values: resultadoPrediccion[0],
  }

  return objectPrediction;

}

module.exports =  main();

