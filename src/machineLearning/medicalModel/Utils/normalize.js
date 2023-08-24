const tf = require('@tensorflow/tfjs-node');

// Función de normalización para tensores de tres dimensiones
function normalize(tensor, min, max) {
  const result = tf.tidy(function () {
    // Encontrar el valor mínimo en el tensor
    const MIN_VALUE = min || tensor.min();
    // Encontrar el valor máximo en el tensor
    const MAX_VALUE = max || tensor.max();

    const TENSOR_SUBTRACT_MIN_VALUE = tensor.sub(MIN_VALUE);

    // Buscar el rango de valores para cada característica
    const RANGE_SIZE = MAX_VALUE.sub(MIN_VALUE);

    // Calcular los valores normalizados divididos por el rango como un nuevo tensor
    const NORMALIZED_VALUES = TENSOR_SUBTRACT_MIN_VALUE.div(RANGE_SIZE);

    return { NORMALIZED_VALUES, MIN_VALUE, MAX_VALUE };
  });

  return result;
}

 module.exports = normalize;