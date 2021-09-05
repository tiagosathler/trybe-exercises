import React from 'react';

class Endereco extends React.Component {
  render() {
    const { value, eventListener } = this.props;
    return (
      <label htmlFor="faddress">
        Endereço:
        <textarea
          id="faddress"
          name="address"
          value={ value }
          onChange={ eventListener }
          placeholder="Seu endereço"
          maxLength="200"
          required="true"
          autoComplete="true"
          rows="2"
          cols="30"
        />
      </label>

    );
  }
}

export default Endereco;
