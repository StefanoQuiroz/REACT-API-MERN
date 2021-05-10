# Coin-Flipping

Digamos que tenemos una función que simula lanzar una moneda ...

```sh
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
```
Y queremos usarlo en una función que vea cuánto tiempo tomará que una moneda caiga en "caras" cinco veces seguidas.


```sh
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );
```
Esto tomará una cantidad de tiempo indeterminada. Si ejecutamos la función síncrona anterior, evitará que se ejecute cualquier código que viene después mientras se lleva a cabo.
Su misión es tomar el código de ejemplo anterior y convertirlo en una Promesa. 

```sh
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
```

## Topics

- Toma la función getFiveHeads y conviértela en una promesa
- Utiliza rechazar antes de que la función getFiveHeads tenga que lanzar una moneda más de 100 veces