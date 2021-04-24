import React from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
