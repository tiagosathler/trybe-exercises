import React from 'react';

class Cargo extends React.Component {
  render() {
    const { name, value, mouseStatus, eventListeners } = this.props;
    const { change, mouseEnter } = eventListeners;
    return (
      <label htmlFor="fcurriculum">
        Cargo:
        <textarea
          id="frole"
          name={ name }
          value={ value }
          onChange={ change }
          onMouseEnter={ () => mouseEnter(mouseStatus) }
          placeholder="Cargo exercido"
          maxLength="40"
          rows="5"
          cols="30"
          required
        />
      </label>

    );
  }
}

export default Cargo;
