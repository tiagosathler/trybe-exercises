import React from 'react';

class Cidade extends React.Component {
  render() {
    const { name, value, eventListeners } = this.props;
    const { change, blur } = eventListeners;
    return (
      <label htmlFor="fcity">
        Cidade:
        <input
          id="fcity"
          type="text"
          name={ name }
          value={ value }
          onChange={ change }
          onBlur={ blur }
          placeholder="Sua cidade"
          maxLength="28"
          required
        />
      </label>

    );
  }
}

export default Cidade;
