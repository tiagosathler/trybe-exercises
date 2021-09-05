import React from 'react';
import Nome from './Nome';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
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
    const { fullName } = this.state;
    return (
      <form className="my-form">
        <fieldset>
          <legend>Dados pessoais</legend>
          <Nome
            name="fullName"
            value={ fullName }
            eventListener={ this.handleClick }
          />
        </fieldset>
      </form>
    );
  }
}

export default Forms;
