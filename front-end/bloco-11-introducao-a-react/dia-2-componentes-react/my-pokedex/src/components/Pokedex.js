import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <main className='pokemons-container'>
        {pokemons.map((pokemon) => <Pokemon pokemon={ pokemon } key={ pokemon.id }/>)}
      </main>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Pokedex.defaultProps = {
  pokemons: [
    {
      id: 0,
      name: 'no-name',
      type: 'no-type',
      averageWeight: {
        value: 0,
        measurementUnit: "no-unit",
      },
      image: '',
    },
  ]
};

export default Pokedex;