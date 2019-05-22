const fs = require('fs');

let crearRegistro = (nombre, cedula, mensaje) => {
    return new Promise((resolve, reject) => {
        texto = `El estudiante ${nombre} con cedula: ${cedula} se encuentra inscrito en el curso: ${mensaje}`;
        fs.writeFile('./registro/matricula.txt', texto, (err) => {
            if (err) reject(err);
            else resolve();
        });
    })
}

module.exports = {
    crearRegistro
}
