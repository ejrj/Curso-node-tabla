const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'Nos permite definir la base de la tabla de multiplicar.'
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: 'false',
                    describe: 'Nos muestra la salida de la aplicacion sin abrir el txt.'
                })
                .options('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Nos permite definir el limite de la tabla de multiplicar..'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base debe ser un numero.'
                    }
                    return true
                })
                .argv

module.exports = argv;