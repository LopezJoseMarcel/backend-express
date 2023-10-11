function prediccionMedica(enfermedad, outputs,inputFunction) {

  const OUTPUTSletra = `OUTPUTS${outputs}`;
  const roundArrayValues = require('./Utils/Round.js');
  const tf = require('@tensorflow/tfjs-node');
  const normalize = require('./Utils/normalize.js');
  let DATA_MED;
  if (enfermedad < 10) {
     DATA_MED = require(`./Data/medicalData0${enfermedad}.js`);
  }else{
    DATA_MED = require(`./Data/medicalData${enfermedad}.js`);
  }
 
 
  let direcction;
  if (enfermedad > 9) {
    direcction = `file:///mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models${enfermedad}/medicalModel${enfermedad}0${outputs}/model.json`;
    console.log(direcction);
  } else {
    direcction = `file:///mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models0${enfermedad}/medicalModel0${enfermedad}0${outputs}/model.json`;
  }
 

  const INPUTS = DATA_MED.INPUTS;
  let OUTPUTS ;
  
  if (outputs == 1) {
    OUTPUTS = DATA_MED.OUTPUTS1;  
  }else if(outputs == 2){
    OUTPUTS = DATA_MED.OUTPUTS2;  
  }else if(outputs == 3){
    OUTPUTS = DATA_MED.OUTPUTS3;  
  }else if(outputs == 4){
    OUTPUTS = DATA_MED.OUTPUTS4;  
  } 
  else if(outputs == 5){
    OUTPUTS = DATA_MED.OUTPUTS5;  
  }

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
    const inputDataEjemplo = inputFunction;
    const resultadoPrediccion = await hacerPrediccion(inputDataEjemplo);


  

    const objectPrediction = {
      values: resultadoPrediccion[0],
    }

    return objectPrediction;

  }

 

 return main()
}

module.exports = prediccionMedica;


