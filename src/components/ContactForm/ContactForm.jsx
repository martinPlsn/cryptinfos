import React, { useState } from "react";
import './ContactForm.css';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/3c0cf020-8266-11ee-892a-477781dfceee";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Merci</div>
        <div className="text-md">Nous vous contacterons bientôt.</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="pt-0-mb-3">
        <input
          type="text"
          placeholder="Nom"
          name="Nom"
          className="input-field"
          required
        />
      </div>
      <div className="pt-0-mb-3">
        <input
          type="text"
          placeholder="Prénom"
          name="Prénom"
          className="input-field"
          required
        />
      </div>
      <div className="pt-0-mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-field"
          required
        />
      </div>
      <div className="pt-0-mb-3">
        <textarea
          placeholder="Message"
          name="message"
          className="input-field" 
          required  style={{ width: '712px', height: '227px' }}
        />
      </div>
      <div className="pt-0-mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default ContactForm;