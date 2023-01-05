const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'.green))
    .catch(err => console.log(err))




















    // Alternativa a Yargs (Leer entrada en consola)
// const [ , , arg3 = 'base=5'] = process.argv
// const [ , base = 5] = arg3.split('=')

//console.log('Base Yargs: ', argv.base)