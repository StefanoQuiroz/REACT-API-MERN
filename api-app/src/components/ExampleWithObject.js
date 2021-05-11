//Ejemplo anterior pero esta vez con objeto del video
import React, {useState, useEffect} from 'react';

const ExampleWithObject = (props) => {
    const [state, setState] = useState(0);

    useEffect(()=>{
        console.log("Actualizandose");
        //aqui va hacer la consulta a la API
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setState({
                //Es donde va mostrar el listado de la data mejor dicho personas
                people: response.results
            }))
    }, [])//se coloca [vacio] para que solo se ejecute en la primera renderizacion, si se cambian. vita que el componente se actualice
    //state.people. para saber si hay personas si las hay hacemos un mapeo si no las hay devuelve un null
    return (
        <div>
            { state.people ? state.people.map((persons, index)=>(
                <div key={index}>{persons.name}</div>
            )) : null}            
        </div>
    );
}

export default ExampleWithObject;
