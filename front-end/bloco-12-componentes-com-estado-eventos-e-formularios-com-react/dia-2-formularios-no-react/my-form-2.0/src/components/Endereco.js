import React from 'react';

class Endereco extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="faddress">
        Endereço:
        <textarea
          id="faddress"
          name={ name }
          value={ value }
          onChange={ eventListener }
          placeholder="Seu endereço"
          maxLength="200"
          autoComplete="true"
          rows="2"
          cols="30"
          required
        />
      </label>

    );
  }
}

export default Endereco;
