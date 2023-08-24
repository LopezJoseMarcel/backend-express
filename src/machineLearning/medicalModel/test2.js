
const objectPredictionPromise = require('./testModel.js');
objectPredictionPromise.then(objectPrediction => {
  console.log(objectPrediction);
}).catch(error => {
  console.error('Error:', error);
});