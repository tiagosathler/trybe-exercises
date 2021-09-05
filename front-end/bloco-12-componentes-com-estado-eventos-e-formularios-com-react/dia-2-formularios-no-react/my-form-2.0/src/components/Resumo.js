import React from 'react';

class Resumo extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="fcurriculum">
        Currículo:
        <textarea
          id="fcurriculum"
          name={ name }
          value={ value }
          onChange={ eventListener }
          placeholder="Descreva sua experiência"
          maxLength="1000"
          rows="5"
          cols="30"
          required
        />
      </label>
    );
  }
}

export default Resumo;
