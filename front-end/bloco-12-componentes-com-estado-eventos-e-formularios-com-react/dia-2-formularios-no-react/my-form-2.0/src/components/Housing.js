import React from 'react';

class Housing extends React.Component {
  render() {
    const { name, checked, eventListener } = this.props;
    return (
      <>
        <label htmlFor="flat">
          <input
            id="flat"
            type="radio"
            name={ name }
            value="Apartamento"
            checked={ checked === 'Apartamento' }
            onChange={ eventListener }
          />
          Apartamento
        </label>
        <label htmlFor="house">
          <input
            id="house"
            type="radio"
            name={ name }
            onChange={ eventListener }
            checked={ checked === 'Casa' }
            value="Casa"
            required
          />
          Casa
        </label>
      </>
    );
  }
}

export default Housing;
