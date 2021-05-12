import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AxiosPokemon = (props) => {
    const [state, setState] = useState([])
    //const [pokeBall, setPokeBall] = useState("");
    
    const onClickHandle = (e)=>{
        //e.preventDefault();
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => setState(response.data.results));
    }

    const items = state.length > 0 && state.map((pokemon, index) => (<StyledDiv key={index}>{pokemon.name}</StyledDiv>))
   ;
    return (
        <div>
            <div>
                <label htmlFor="pokemonName">Buscar Pokemon: </label>
                <input type="text" name="pokemonName" />
            </div>
            <StyledButton onClick={onClickHandle}>Fetch Pokemons</StyledButton>
            <div>{items}</div>
        </div>
    );
}

export default AxiosPokemon;
