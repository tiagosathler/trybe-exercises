import React from 'react';

class Nome extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="fname">
        Nome:
        <input
          type="text"
          id="fname"
          name={ name }
          maxLength="40"
          value={ value.toUpperCase() }
          placeholder="Escreva seu nome completo"
          onChange={ eventListener }
          required
        />
      </label>
    );
  }
}

export default Nome;
