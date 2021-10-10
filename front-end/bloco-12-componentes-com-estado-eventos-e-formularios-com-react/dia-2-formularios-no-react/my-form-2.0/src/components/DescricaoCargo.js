import React from 'react';

class DescricaoCargo extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="fdescribe">
        Descrição do cargo:
        <input
          type="text"
          id="fdescribe"
          name={ name }
          maxLength="500"
          value={ value }
          placeholder="Descreva o cargo"
          onChange={ eventListener }
          required
        />
      </label>
    );
  }
}

export default DescricaoCargo;
