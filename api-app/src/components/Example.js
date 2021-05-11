//Mostrar una lista de pokemons en la base de datos
import React, {useState, useEffect} from 'react';

const Example = () => {
    const [pokemons, setPokemons] = useState([]);
    //Hacer llamada a la API con useEffect con ayuda de 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }, [])
    return (
        <div>
            {pokemons.length > 0 && pokemons.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}            
        </div>
    );
}

export default Example;
