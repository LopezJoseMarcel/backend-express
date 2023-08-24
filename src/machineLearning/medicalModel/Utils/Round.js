function roundArrayValues(array) {
    const roundedArray = array.map(subArray => {
      return subArray.map(value => Math.round(value));
    });
    return roundedArray;
  }

  module.exports = roundArrayValues;