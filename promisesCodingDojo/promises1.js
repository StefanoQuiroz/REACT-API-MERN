//Ejemplo de promises Coding Dojo
//Promise
const noMondays = new Promise((resolve, reject) =>{
    if(new Date().getDate() !== 1){
        resolve({
            txtMsg: 'Good it´s not Monday!'
        })
    } else {
        reject("Someone has a case of the Mondays!");
    }
})

noMondays
    .then(data => console.log('Respuestas =>', data))
    .catch(err => console.log('Error =>', err));
//fin

