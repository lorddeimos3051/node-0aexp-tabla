const fs = require('fs');
const argv = require('./config/yargs')
const { creaArchivo } = require('./helpers/multiplicar');
const color = require('colors');

console.clear();

//console.log( process.argv );
//console.log( argv );

// console.log( 'base yargs: ', argv.b );


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log( base );

//const base = 2;

creaArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( color.green(nombreArchivo), ' creado' ))
    .catch( error=> console.log( error ) )
   