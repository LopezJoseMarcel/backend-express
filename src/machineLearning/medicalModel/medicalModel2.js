const DATA_MED = require('./Data/medicalData10');
const tf = require('@tensorflow/tfjs-node');
const normalize = require('./Utils/normalize.js');

const INPUTS = DATA_MED.INPUTS;
const OUTPUTS = DATA_MED.OUTPUTS1;

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

   //await model.save(`file:///mnt/c/MARCEL_uNi/Platzi/TensorFlow.js/Proyectos/firstTensor/Models/Models10/medicalModel1003`);

  normalizedOutputs.NORMALIZED_VALUES.dispose();

  evaluate([55, 1, 10, 2, 29]);// <--
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

function logProgress(epoch, logs) {
  console.log('Data for epoch ' + epoch, logs);
}

function denormalize(predictions, minValues, maxValues) {
  const range = tf.sub(maxValues, minValues);
  const denormalizedValues = tf.mul(predictions, range);
  const denormalizedOutputs = tf.add(denormalizedValues, minValues);
  return denormalizedOutputs;
}