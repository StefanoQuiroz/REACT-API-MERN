import React, {useState} from 'react';
import styled from 'styled-components';
//URL
//https://pokeapi.co/api/v2/pokemon
//https://pokeapi.co/api/v2/pokemon/?limit=807

const StyledButton = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 1.7rem;
    margin: 2rem auto;
    background-color: #505050;
    color:white;
    border-radius: 7px;
    border-color: none;
`;

const StyledDiv = styled.div`
    text-align: left;
    grid: flex;
    justify-content: center;
    algn-items: center;
    margin: auto;
    width: 8rem;
`;

const ReviewPokemonsApi = () => {
    const [state, setState] = useState([]);
    const [pokemonName, setPokemonName] = useState("");

    const onClickHandle = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setState(response.results));
    }

    /* useEffect(()=>{
        onClickHandle();
    },[]) */

   
    const findPokemon = state.length > 0 && state.map((pokemons)=> ((pokemonName === pokemons.name) ? true : false))
    
    const finder = () => {
        if(findPokemon.length && findPokemon.includes(true)){
            return "existe";
        } else {
            return "No existe"
        }
    }
    const items = state.length > 0 && state.map((pokemons, index) => (<StyledDiv key={index}>{pokemons.name}</StyledDiv>));
    return (
        <div>
            <div>
                <label>Buscar Pokemon: </label>
                <input type="text" value={pokemonName} onChange={(e)=>setPokemonName(e.target.value)} />
                <h3>{finder()}</h3>
            </div>
            <StyledButton onClick={onClickHandle}>Fetch Pokemon</StyledButton>
            <ul>{items}</ul>
        </div>
    );
}

export default ReviewPokemonsApi;
