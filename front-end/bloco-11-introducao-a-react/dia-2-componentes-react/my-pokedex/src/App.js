import './App.css';
import Pokedex from './components/Pokedex';
import React from 'react';
import pokemons from './data'

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemons={pokemons} />
    );
  }  
}

export default App;
