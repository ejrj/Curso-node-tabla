const fs = require('fs')
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta = 10) => {
    try {
        let salida = ''

        for(let i = 1; i <= hasta; i++){
            salida += `${i} * ${base} = ${i * (base)}\n`
        }

        if(listar === true){
            console.log('========================================'.red)
            console.log(`             Tabla del: ${base}         `.green)
            console.log('========================================\n'.red)
            console.log(colors.rainbow(salida))
        }

        fs.writeFileSync(`./salida/Tabla-Del-${base}.txt`, salida)
        return `tabla-${base}.txt`

        console.log('========================================\n')

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}