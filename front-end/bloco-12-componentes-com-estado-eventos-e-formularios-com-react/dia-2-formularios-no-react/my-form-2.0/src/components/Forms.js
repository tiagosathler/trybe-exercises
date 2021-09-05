import React from 'react';
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      address: '',
      // city: '',
      // state: '',
      // housing: 'house',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullName, email, cpf, address } = this.state;
    return (
      <form className="my-form">
        <fieldset>
          <legend>Dados pessoais</legend>
          <Nome
            name="fullName"
            value={ fullName }
            eventListener={ this.handleClick }
          />
          <br />
          <Email
            name="email"
            value={ email }
            eventListener={ this.handleClick }
          />
          <br />
          <Cpf
            name="cpf"
            value={ cpf }
            eventListener={ this.handleClick }
          />
          <br />
          <Endereco
            name="address"
            value={ address }
            eventListener={ this.handleClick }
          />

        </fieldset>
      </form>
    );
  }
}

export default Forms;
