
const prediccionMedica = require('./testModel.js'); // Ajusta la ruta según la ubicación del archivo predictor.js

async function main() {
  try {
    const enfermedad = 1; // Cambia esto según tu necesidad
    const outputs = 1; // Cambia esto según tu necesidad

    const resultado = await prediccionMedica(enfermedad, outputs,[[26, 1, 1, 3, 8]]);
    console.log('Resultado de la predicción:', resultado);
  } catch (error) {
    console.error('Error en la predicción:', error);
  }
}

main();

