const { rejects } = require('assert');
const fs = require('fs');
const color = require('colors');


const creaArchivo =  async(base = 5, listar = false, hasta = 10 ) => {
    
        try {
            let salida = '';

            for (i=1;i<=hasta;i++){
                salida += `${base} * ${i} = ${base * i}\n`;
            }
            
            if (listar) {
                console.log('==================================='.bgBlue.yellow);
                //console.log(`=========== TABLA DEL ${base} ===========`.bgBlack.rainbow);
                console.log(color.bgBlue('========== TABLA DEL ', base, ' =========='));
                console.log('==================================='.bgBlue.yellow);
                console.log(color.rainbow(salida));
            }
            

            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
            return( `tabla-${base}.txt` );        
        } catch (error) {
            throw error;
        }
     
}



module.exports = {
    creaArchivo
}