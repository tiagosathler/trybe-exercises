import React from 'react';
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Housing from './Housing';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      housing: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    // console.log(target);
    // const value = target.checked ? checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleBlur({ target }) {
    const { name, value } = target;
    const newValue = Number.isInteger(Number(value[0])) ? '' : value;
    this.setState({
      [name]: newValue,
    });
  }

  render() {
    const { fullName, email, cpf, address, city, state, housing } = this.state;
    return (
      <form className="my-form">
        <fieldset>
          <legend>Dados pessoais</legend>
          <Nome
            name="fullName"
            value={ fullName }
            eventListener={ this.handleChange }
          />
          <br />
          <Email
            name="email"
            value={ email }
            eventListener={ this.handleChange }
          />
          <br />
          <Cpf
            name="cpf"
            value={ cpf }
            eventListener={ this.handleChange }
          />
          <br />
          <Endereco
            name="address"
            value={ address }
            eventListener={ this.handleChange }
          />
          <br />
          <Cidade
            name="city"
            value={ city }
            eventListeners={ {
              change: this.handleChange,
              blur: this.handleBlur } }
          />
          <br />
          <Estado
            name="state"
            value={ state }
            eventListener={ this.handleChange }
          />
          <br />
          <Housing
            name="housing"
            checked={ housing }
            eventListener={ this.handleChange }
          />
        </fieldset>
      </form>
    );
  }
}

export default Forms;
