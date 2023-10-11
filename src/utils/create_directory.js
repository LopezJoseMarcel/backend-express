const fs = require('fs-extra');

function create_directory(enfermedadNumero,objeto) {
    const cantidadInputs = Object.keys(objeto).length;
    
    //const folderPath = '/mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models11/medicalModel1102';
    const folderPath2 =  `/mnt/c/MARCEL_uNi/TCC/Finalproject/backend-express/src/machineLearning/Models/Models${enfermedadNumero}`;
                         
    if (!fs.existsSync(folderPath2)) {
      for (let i = 1; i <= cantidadInputs; i++) {
        if (enfermedadNumero > 9) {
            fs.mkdirSync(folderPath2 + `/medicalModel${enfermedadNumero}0${i}`, { recursive: true }); // Crea la carpeta y sus padres si es necesario
        } else {
            fs.mkdirSync(folderPath2 + `/medicalModel0${enfermedadNumero}0${i}`, { recursive: true }); // Crea la carpeta y sus padres si es necesario
        }
      }
    } else {
      console.log('La carpeta ya existe');
      fs.removeSync(folderPath2);
      for (let i = 1; i <= cantidadInputs; i++) {
        if (enfermedadNumero > 9) {
            fs.mkdirSync(folderPath2 + `/medicalModel${enfermedadNumero}0${i}`, { recursive: true }); // Crea la carpeta y sus padres si es necesario
        } else {
            fs.mkdirSync(folderPath2 + `/medicalModel0${enfermedadNumero}0${i}`, { recursive: true }); // Crea la carpeta y sus padres si es necesario
        }
      }
      
    }
}

module.exports = create_directory;

