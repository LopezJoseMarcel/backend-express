function createObject(arrayInfo) {
  const groupedData = {};

  arrayInfo.forEach((item) => {
    const key = `input${item.output1[0][0]}`;

    if (!groupedData[key]) {
      groupedData[key] = {
        input: [],
        output: []
      };
    }

  groupedData[key].input.push(item.input[0]);
  groupedData[key].output.push(item.output1[0]);
});

console.log(groupedData);
  
  const sortedKeys = Object.keys(groupedData).sort((a, b) => {
    const numA = parseInt(a.replace("input", ""));
    const numB = parseInt(b.replace("input", ""));
    return numA - numB;
  });
  
  const resultObject = {};
  
  sortedKeys.forEach((key, index) => {
    const newKey = `input${index + 1}`;
    resultObject[newKey] = groupedData[key];
  });
  
  console.log(resultObject);

  return resultObject;
}

module.exports = createObject;