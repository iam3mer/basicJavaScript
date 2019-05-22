const fs = require('fs');

let crearArchivo = (nombre, cedula, mensaje) => {
    return new Promise((resolve, reject) => {
        if (!Number(cedula)) {
            reject(`El valor introducido en "${cedula}" no es número`);
        }
        texto = `El estudiante ${nombre} \ncon cedula ${cedula} \nSe ha 
matriculado en el curso llamado ${mensaje}`;
        fs.writeFile('./registro/matricula.txt', texto, (err) => {
            if (err) reject(err);
            else resolve();
        });
    })
}

module.exports = {
    crearArchivo
}
