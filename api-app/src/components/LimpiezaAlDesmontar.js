import React, {useState, useEffect} from 'react';

const LimpiezaAlDesmontar = () => {
    const [time, setTime] = useState(new Date().toLocaleString());
    //setInterval(function(){alert("hello")}, 3000) tiene de argumento una funcion anonima y el inntervalo en milisegundos
    useEffect(() => {
        const int = setInterval(
            //ACTUALIZA LA HORA CON LA HORA ACTUAL Y EL INTERVALO DE 1000 MILISEGUNDOS =~ 1 SEGUNDO
            //FUNCION ANONIMA
            () => setTime(new Date().toLocaleString()),
            1000
        );
 
        /* return function clearInt() {
            //clearInterval borra un temporizador configurado con el metodo setInterval()
            clearInterval(int);
        } */
        //mejor asi!!!
        //borra un temporizador configurado con el metodo setInterval()
        return ()=>clearInterval(int);
    }, []);
 
    return (
        <div>Current Time: {time}</div>
    );
}

export default LimpiezaAlDesmontar;
