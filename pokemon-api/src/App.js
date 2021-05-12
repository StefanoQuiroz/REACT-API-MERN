import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import PokemonApi from './components/PokemonApi'
import ReviewPokemonsApi from './components/ReviewPokemonsApi'
function App() {
  return (
    <div className="App">
      {/* <PokemonApi/> */}
      <ReviewPokemonsApi/>
    </div>
  );
}

export default App;
