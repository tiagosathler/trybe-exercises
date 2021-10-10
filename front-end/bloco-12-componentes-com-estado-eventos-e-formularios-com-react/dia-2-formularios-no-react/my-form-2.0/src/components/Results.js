import React from 'react';

class Results extends React.Component {
  render() {
    const { submit, form } = this.props;
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
      roleDescription,
    } = form;
    if (submit) {
      return (
        <div>
          <p>
            {`Nome: ${fullName}`}
          </p>
          <p>
            {`Email: ${email}`}
          </p>
          <p>
            {`CPF: ${cpf}`}
          </p>
          <p>
            {`Endereço: ${address}`}
          </p>
          <p>
            {`Cidade: ${city}`}
          </p>
          <p>
            {`Estado: ${state}`}
          </p>
          <p>
            {`Tipo de moradia: ${housing}`}
          </p>
          <p>
            {`Resumo do currículo: ${curriculum}`}
          </p>
          <p>
            {`Cargo: ${role}`}
          </p>
          <p>
            {`Descrição do cargo: ${roleDescription}`}
          </p>
        </div>
      );
    }
    return (
      <>
      </>
    );
  }
}

export default Results;
