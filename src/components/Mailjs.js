import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Mailjs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    const serviceId = "service_k1l9heg"
    const templateId = "template_l4v41nt"
    const publicKey = "y77VhhP3PrgRq_WAP"
  

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Kiko',
    message: message

    }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent succesfully", response)
      setName('')
      setEmail('')
      setMessage('')
    })
    .catch((error) => {
      console.error('Error Sending Message', error)
    })


  }
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_k1l9heg', 'template_l4v41nt', form.current, {
  //       publicKey: 'y77VhhP3PrgRq_WAP',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="to_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Mailjs