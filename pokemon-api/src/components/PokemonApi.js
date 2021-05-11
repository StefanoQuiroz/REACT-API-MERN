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

const PokemonApi = (props) => {
    const [state, setState] = useState([]);
    
    const onClickHandle = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setState(response.results));
    }

    const items = state.length>0 && state.map((pokemon, index) => (<StyledDiv key={index}>{pokemon.name}</StyledDiv>));
    return (
        <div>
            <StyledButton onClick={onClickHandle}>Fetch Pokemons</StyledButton>
            <div>{items}</div>
        </div>
    );
}

export default PokemonApi;
