import React from 'react';

class Cpf extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="fcpf">
        CPF:
        <input
          id="fcpf"
          type="text"
          name={ name }
          value={ value }
          onChange={ eventListener }
          placeholder="Somente números"
          maxLength="11"
          required
        />
      </label>

    );
  }
}

export default Cpf;
