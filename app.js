const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

/*
//console.log(process.argv);
const[ ,, arg3='base=5'] = process.argv;
const[ , base = 5 ] = arg3.split('=');
console.log( base );
*/


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( `${ nombreArchivo } creado`.yellow.bgRed.bold))
    .catch( err => console.log(err) );
