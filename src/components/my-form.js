// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React, { useState } from "react";

export default function MyForm () {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleName(e) {
    console.log(e.target.value)
    setName(e.target.value);
  }
  function handleMessage(e) {
    console.log(e.target.value)
    setMessage(e.target.value);
  }

  function submitForm(ev) {
    ev.preventDefault();
    setStatus('');
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200 && name !== "" && message !== "") {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xeqrqwwe"
      method="POST"
    >
      <h4>Escreva uma mensagem!</h4>
      <p>
        <label htmlFor="name"><strong>Nome:</strong></label>
        {status === "ERROR" && name === '' && (
          <sup className="error"> * Faltou o seu nome</sup> 
        )}
        <br/>
        <input 
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          value={name}
          placeholder="Martin Ruiz Lopes" 
        />
      </p>
      <p>
        <label htmlFor="message"><strong>Mensagem:</strong></label>
        {status === "ERROR" && message === '' &&
          <sup className="error"> * Faltou uma mensagem</sup> 
        }
        <br />
        <textarea 
          rows="5"
          id="message"
          name="message"
          placeholder="Escreva aqui a mensagem."
          className={status === "ERROR" && message === '' && 'input-error'}
          value={message}
          onChange={handleMessage}
        />
      </p>
      <p>
        {status === "ERROR" && <span className="error">Vish! Algo deu errado.</span>}
      </p>
      <p className="p-button">
        {status === "SUCCESS" 
          ? <span className="success">Obrigado!</span>
          : <button className="button-form" type="submit">Enviar</button>
        }
      </p>
    </form>
  );

}