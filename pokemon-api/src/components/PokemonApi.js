import React, {useState} from 'react';
import styled from 'styled-components';
//https://pokeapi.co/api/v2/pokemon
//https://pokeapi.co/api/v2/pokemon/?limit=807

    const StyledButton = styled.button`
        display:flex;
        align-items: center;
        justify-content: center;
        width: 12rem;
        heigth: 1rem;
        margin: 2rem auto;

    `;

    const StyledDiv = styled.div`
        text-align: left;
        grid: flex;
        justify-content: center;
        algn-items: center;
        margin: auto;
        width: 8rem;

    `;

    const PokemonApi = () => {
        const [state, setState] = useState({
            pokemons: ""
        });

    
    
    const onClickHandle = (e) => {
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setState({
                pokemons: response.results
            }))
    }

    
    const items = state.pokemons ? state.pokemons.map((pokemon, index) => (<StyledDiv key={index}>{pokemon.name}</StyledDiv>)) : null;

    return (
        <div>
            <StyledButton type="button" onClick={onClickHandle}>Fetch Pokemons</StyledButton>
            <div>{items}</div>
        </div>
    );
}

export default PokemonApi;
