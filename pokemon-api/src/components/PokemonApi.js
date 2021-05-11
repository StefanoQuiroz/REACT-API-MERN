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
    //Method onChange
    const onChangeClick = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({
            ...state,
            [name]:value,
        })
        
    }

    //Method onClick
    const onClickHandle = (e) => {
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setState(response.results));
    }

    /* const findPokemon =()=>{
        for(let i=0; i<state.length; i++){
            if(state.name === state[i].name)
        }
    } */
    //list-items
    const items = state.length>0 && state.map((pokemon, index) => (<StyledDiv key={index}>{pokemon.name}</StyledDiv>));
    return (
        <div>
            <div>
                <label htmlFor="pokemonName">Buscar Pokemon: </label>
                <input type="text" name="pokemonName" placeholder="Ingrese Pokemon" onChange={onChangeClick}/>
                {/* {
                    state.map(p=>{ (p.name === state.name) ?
                        <h3>Existe</h3> : 
                        <h3>No existe</h3>
                    })
                } */}
            </div>
            <StyledButton onClick={onClickHandle} value={state}>Fetch Pokemons</StyledButton>
            <div>{items}</div>
        </div>
    );
}

export default PokemonApi;

//onClick cuando aparezca y desaparezca
//cuando recibo un input y quiero comprarlo con el item,name de pokemon