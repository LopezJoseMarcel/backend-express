function generarArrays(cantidad) {
  const arrays = [];

  for (let i = 0; i < cantidad; i++) {
    const array = [];

    // Generar número aleatorio entre 16 y 80
    const numAleatorio = Math.floor(Math.random() * (10 - 75 + 1)) + 75;  //Edad
    array.push(numAleatorio);

    // Generar 1 o 2 de manera aleatoria
    const numAleatorio12 = Math.random() < 0.5 ? 1 : 2;                   //Genero
    array.push(2);

    // Agregar el número 1
    array.push(10);                                                       //enfermedad

    // Generar 6 o 7 de manera aleatoria
    const arrayOpciones1 = [2,6,8,11];                         //lesion elemental
    const numAleatorioArray1 = arrayOpciones1[Math.floor(Math.random() * arrayOpciones1.length)];
    array.push(numAleatorioArray1);

    // Elegir aleatoriamente un número del array [7,13,14,15,16,17,18,22,24,25,26]
    const arrayOpciones = [30,31];                         //Ubicacion
    const numAleatorioArray = arrayOpciones[Math.floor(Math.random() * arrayOpciones.length)];
    array.push(numAleatorioArray);

    arrays.push(array);
  }

  return arrays;
}

const cantidadArrays = 25; // Cambia este valor según la cantidad de arrays que necesitas
const arraysGenerados = generarArrays(cantidadArrays);
console.log(arraysGenerados);