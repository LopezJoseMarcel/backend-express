function generarArrays(cantidad) {
  const arrays = [];

  for (let i = 0; i < cantidad; i++) {
    const array = [];

    // Generar 1 o 4 de manera aleatoria
    const numAleatorio14 = Math.random() < 0.5 ? 4 : 5;
    const numAleatorio = Math.random() < 0.5 ? 10 : 14;
    const numAleatorioFre = Math.random() < 0.5 ? 4 : 5;
    array.push(3);                                     //medicamento

    // Agregar el número 1
    array.push(numAleatorio14);                        //cantidad

    // Agregar el número 15
    array.push(10);                                    //unidad

    // Agregar el número 12
    array.push(8);                                    //Frecuencia Diaria


    const arrayOpciones = [15,14,15];
    const numAleatorioArray = arrayOpciones[Math.floor(Math.random() * arrayOpciones.length)];
    // array.push(numAleatorioArray);
    // Agregar el número 10
    array.push(numAleatorioArray);

    arrays.push(array);
  }

  return arrays;
}

const cantidadArrays = 100; // Cambia este valor según la cantidad de arrays que necesitas
const arraysGenerados = generarArrays(cantidadArrays);
console.log(arraysGenerados);
