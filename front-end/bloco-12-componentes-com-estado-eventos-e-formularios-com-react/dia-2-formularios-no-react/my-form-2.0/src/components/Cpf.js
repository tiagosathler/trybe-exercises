import React from 'react';

class Cpf extends React.Component {
  render() {
    const { value, eventListener } = this.props;
    return (
      <label htmlFor="fcpf">
        CPF:
        <input
          id="fcpf"
          type="text"
          name="cpf"
          value={ value }
          onChange={ eventListener }
          placeholder="Somente números"
          maxLength="11"
          required="true"
        />
      </label>

    );
  }
}

export default Cpf;
