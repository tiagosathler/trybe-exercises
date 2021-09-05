import React from 'react';

class Email extends React.Component {
  render() {
    const { value, eventListener } = this.props;
    return (
      <label htmlFor="femail">
        Email:
        <input
          id="femail"
          type="email"
          name="email"
          value={ value }
          onChange={ eventListener }
          placeholder="Seu email"
          maxLength="50"
          required="true"
        />
      </label>

    );
  }
}

export default Email;
