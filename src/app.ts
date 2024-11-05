import { yarg } from "./config/pligins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


(async() => {  // funcion anonima auto-invocada
    await main();    
})();

async function main() {

    const {b:base, l:limit, s:showTable, n:fileName, d:fileDestination} = yarg;   

    ServerApp.run({base, limit, showTable, fileName, fileDestination});
    
}