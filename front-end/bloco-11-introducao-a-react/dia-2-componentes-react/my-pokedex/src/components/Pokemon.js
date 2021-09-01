import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;
    return (
      <section className='pokemon-container'>
        <div className='description'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <div className='image'>
          <img src={image} alt={name}></img>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),    
  })
}

export default Pokemon;