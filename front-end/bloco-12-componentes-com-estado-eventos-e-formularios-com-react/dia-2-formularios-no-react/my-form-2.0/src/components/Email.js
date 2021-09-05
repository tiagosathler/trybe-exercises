import React from 'react';

class Email extends React.Component {
  render() {
    const { name, value, eventListener } = this.props;
    return (
      <label htmlFor="femail">
        Email:
        <input
          id="femail"
          type="email"
          name={ name }
          value={ value }
          onChange={ eventListener }
          placeholder="Seu email"
          maxLength="50"
          required
        />
      </label>

    );
  }
}

export default Email;
