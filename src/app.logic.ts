import fs from 'fs';
import { yarg } from './config/pligins/yargs.plugin';


const { b:base, l:limit, s:showTable} = yarg;

let table:string = "";

let output:string = "";

const header = `
===============================================
            Tabla del ${base}
===============================================\n
`; 


for (let i = 1; i <= limit; i++) {
    table += `${base} x ${i} = ${base * i} \n`;
}

output = header + table;

if (showTable) {
    console.log(output);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, output);

console.log('File Created');



// grabar en el archivo de salida
// path output/tabla-5.txt 