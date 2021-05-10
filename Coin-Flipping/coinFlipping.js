//Funcion para lanzar moneda Cara o sello
const tossCoin = () => (Math.random() > 0.5 ? 'heads' : 'tails');

//console.log(tossCoin());

//Una funcion que vea cuanto tiempo tomará que una moneda caiga en "caras" 5x seguidas

const fiveHeadsSync = () => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5){
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === 'heads'){
            headsCount++;
            //el eelse de abajo lo resetea a 0 para buscar las 5x heads de nuevo
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

//console.log(fiveHeadsSync());

//Convertir a Promises
const fiveHeads = () => {
    return new Promise((resolve,reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5){
            attempts++;
            let result = tossCoin();
            if(result === 'heads'){
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        //Promises resolve({objeto}) y reject({objeto})
        if(attempts < 100){
            resolve({
                Attempts: attempts,
                Msg: 'Menos de 100 intentos' 
            })
        } else {
            reject({
                Attempts: attempts,
                Msg: 'Mas de 100 intentos'
            })
        }      
    })
}

fiveHeads()
    .then(res => console.log('Respuesta => ', res))
    .catch(err => console.log('Error => ', err));

console.log("When does this run now, INTERESTING!!!")
