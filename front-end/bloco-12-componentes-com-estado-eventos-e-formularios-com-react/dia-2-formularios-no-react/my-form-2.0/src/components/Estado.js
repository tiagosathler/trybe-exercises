import React from 'react';

class Estado extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    const states = [
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RO',
      'RS',
      'RR',
      'SC',
      'SE',
      'SP',
      'TO',
    ];
    return (
      <label htmlFor="fstate">
        Estado:
        <select
          id="fstate"
          type="text"
          name={ name }
          value={ value }
          onChange={ eventListener }
          placeholder="Escolha seu Estado"
          required
        >
          { states.map((state) => (
            <option
              value={ state }
              key={ state }
            >
              { state }
            </option>))}
        </select>
      </label>
    );
  }
}

export default Estado;
