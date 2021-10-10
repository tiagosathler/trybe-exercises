import React from 'react';

class Submit extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <button
        id="submit"
        type="submit"
        name={ name }
      >
        Enviar
      </button>
    );
  }
}

export default Submit;
