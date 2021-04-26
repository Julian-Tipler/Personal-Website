import React from "react";

function EmailForm({sendEmail, email}) {
  console.log(email)
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Subject</label>
        <input className="email-form-subject" type="text" value={email.subject} name="subject" />
        <label>Message</label>
        <textarea
          className="email-form-message"
          value={email.message}
          name="message"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default EmailForm;
