import React, {useState, useEffect} from 'react';
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
    //state para el ussEffect
    const [state, setState] = useState([]);
    //state para el input
    const [userPokemon, setUserPokemon ] = useState("");
    
    useEffect(()=>{
        onClickHandle()
    },[])

    const onClickHandle = () => {
        //e.preventDefault();
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
    //boolState ? setBoolState(false) : setBoolState(true)
    const findPokemon= state.length> 0 && state.map((p, index)=>  ((p.name === userPokemon) ? "Existe": ""));

    const items = state.length>0 && state.map((pokemon, index) => (<StyledDiv key={index}>{pokemon.name}</StyledDiv>));
    return (
        <div>
            {console.log(state)}
            <div>
                <label htmlFor="pokemonName">Buscar Pokemon: </label>
                <input type="text" name="pokemonName" placeholder="Ingrese Pokemon" onChange={e=>setUserPokemon(e.target.value)}/* onChange={onChangeClick} *//>
                <h3>{(findPokemon.length > 0 && findPokemon.includes("Existe")) ? "existe" : "No existe" }</h3>
                
            </div>
            <StyledButton onClick={onClickHandle} value={state}>Fetch Pokemons</StyledButton>
            <div>{items}</div>
        </div>
    );
}

export default PokemonApi;

//onClick cuando aparezca y desaparezca
//cuando recibo un input y quiero comprarlo con el item.name de pokemon