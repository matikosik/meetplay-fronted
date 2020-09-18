import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="formEE">
    <input
      className="inputEE"
      type="text"
      placeholder="Escribe un mensaje"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButtonEE" onClick={e => sendMessage(e)}>Enviar</button>
  </form>
)

export default Input;