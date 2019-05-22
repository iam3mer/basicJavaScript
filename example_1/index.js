const argv = require('./js/yargs').argv;
const curso = require('./js/cursos').curso;
const { crearRegistro } = require('./js/crearRegistro');

let comand = argv._[0];

function mensaje(id_curso) {
    setTimeout(function() {
        let texOut = 'Curso: ';
        let name = curso[id_curso];
        console.log(texOut + ms(name.curso, name.horas, name.valor));
    }, id_curso * 2000 + 2000);
}

function ms(curso, horas, valor) {
    return `${curso} \nDuración: ${horas} horas. \nCosto de matrícula: ${valor} dolares.\n`;
}

switch (comand) {
    case 'matricular':
        if (Number(argv.id) < curso.length + 1) {
            name = curso.find(cursoEst => cursoEst.id == argv.id)
            crearRegistro(argv.nombre, argv.cedula, ms(name.curso,
name.horas, name.valor))
                .then(e => console.log('Se realizado el registro.'))
                .catch(e => console.log(e));
        } else {
            console.log(`El id del curso seleccionado no existe (id = "${argv.id}")`)
        }
        break;
}

if (!comand)
    for (var trav in curso) {
        mensaje(trav);
    }
