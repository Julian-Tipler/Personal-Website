import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe({ skills }) {
  const [emailContent, setEmailContent] = useState("Hi Julian," + '\n' + '\n' +
   skills.map(skill=> {
       return skill[0]
   }) + 
   '\n' + '\n' + 'Sincerely,');
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w6igvfk",
        "contact_form",
        e.target,
        "user_p0OijmXOMzDtOf8rMKWjR"
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleChange = e => {
    setEmailContent(e.target.value)
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Message</label>
      <textarea name="message" onChange={handleChange} value={emailContent} />
      <input type="submit" value="Send" />
    </form>
  );
}
