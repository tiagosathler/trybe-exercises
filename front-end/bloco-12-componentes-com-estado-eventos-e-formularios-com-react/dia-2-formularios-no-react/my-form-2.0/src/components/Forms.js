import React from 'react';
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Housing from './Housing';
import Resumo from './Resumo';
import Cargo from './Cargo';
import DescricaoCargo from './DescricaoCargo';
import Submit from './Submit';
import Results from './Results';

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
      curriculum: '',
      role: '',
      mouseStatus: false,
      roleDescription: '',
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
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

  handleMouseEnter() {
    const { mouseStatus } = this.state;
    if (!mouseStatus) {
      window.alert('Preencha com cuidado esta informação');
      this.setState({ mouseStatus: true });
    }
  }

  // handleSubmit() {
  //   const {
  //     fullName,
  //     // email,
  //     // cpf,
  //     // address,
  //     // city,
  //     // state,
  //     // housing,
  //     // curriculum,
  //     // role,
  //     // mouseStatus,
  //     // roleDescription
  //   } = this.state;
  //   return (
  //     <div>
  //       <p>
  //         Nome:
  //         { fullName }
  //       </p>
  //     </div>
  //   );
  // }

  render() {
    const {
      fullName,
      email,
      cpf,
      address,
      city,
      state,
      housing,
      curriculum,
      role,
      mouseStatus,
      roleDescription,
      submit,
    } = this.state;

    return (
      <main>
        <form
          className="my-form"
          onSubmit={ (event) => {
            event.preventDefault();
            this.setState({ submit: true });
          } }
        >
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
          <fieldset>
            <legend>Dados sobre o último emprego</legend>
            <Resumo
              name="curriculum"
              value={ curriculum }
              eventListener={ this.handleChange }
            />
            <br />
            <Cargo
              name="role"
              value={ role }
              mouseStatus={ mouseStatus }
              eventListeners={ {
                change: this.handleChange,
                mouseEnter: this.handleMouseEnter } }
            />
            <br />
            <DescricaoCargo
              name="roleDescription"
              value={ roleDescription }
              eventListener={ this.handleChange }
            />
            <Submit
              name="submit"
              eventListener={ this.handleSubmit }
            />
          </fieldset>
        </form>
        <section>
          <Results
            submit={ submit }
            form={ this.state }
          />
        </section>
      </main>
    );
  }
}

export default Forms;
