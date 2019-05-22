const argv = require('./js/yargs').argv;
const curso = require('./js/curso').curso;
const { crearArchivo } = require('./js/crearArchivo');

let comand = argv._[0];

function mensaje(id_curso) {
    setTimeout(function() {
        let texOut = 'El curso se llama';
        let name = curso[id_curso];
        console.log(texOut + ms(name.curso, name.horas, name.valor));
    }, id_curso * 2000 + 2000);
}

function ms(curso, horas, valor) {
    return `${curso} tiene una duración de ${horas} horas y su valor de 
matrícula es ${valor} pesos`;
}

switch (comand) {
    case 'inscribir':
        if (Number(argv.id) < curso.length + 1) {
            name = curso.find(cursoEst => cursoEst.id == argv.id)
            crearArchivo(argv.nombre, argv.cedula, ms(name.curso, 
name.horas, name.valor))
                .then(e => console.log('Se ha creado el archivo'))
                .catch(e => console.log(e));
        } else {
            console.log(`El valor introducido en "${argv.id}" no es 
número válido`)
        }
        break;
}

if (!comand)
    for (var trav in curso) {
        mensaje(trav);
    }
