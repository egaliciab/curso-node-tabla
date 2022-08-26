const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida, consola = '';
        for ( let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base*i }\n`; 
            consola += `${ base } ${ 'x'.magenta } ${ i } ${ '='.yellow } ${ base*i }\n`;
        }

        if (listar) {
            console.log('================='.magenta);
            console.log('   Tabla del:'.cyan, colors.green(base) );
            console.log('================='.magenta);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;
    } catch( err ) {
        throw err;
    }
}

module.exports = { 
    crearArchivo
 }