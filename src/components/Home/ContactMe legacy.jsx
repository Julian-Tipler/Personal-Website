import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [skills, setSkills] = useState([]);
  const [mySkills, setMySkills] = useState([
    ["react", false],
    ["node", false],
    ["redux", false],
  ]);
  const [emailContent, setEmailContent] = useState(
    "Hi Julian," + "\n" + "\n" + "Sincerely,"
  );
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

  const handleClick = (e) => {
    e.preventDefault();
    let targetSkill = e.target.textContent;
    setSkills([...skills, targetSkill]);
    let newSkills = mySkills.map((skill) => {
      return skill[0] !== targetSkill ? skill : [`${targetSkill}`, !skill[1]];
    });
    setMySkills([...newSkills]);
    setEmailContent()
  };

  const handleChange = (e) => {
    setEmailContent(e.target.value);
  };

  if (emailSent) {
    return <div>Thank you for your interest!</div>;
  }
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Message</label>
        <textarea name="message" onChange={handleChange} value={emailContent} />
        <input type="submit" value="Send" />
      </form>
      <div className="home-skills-buttons">
        {mySkills.map((skill) => {
          return <button onClick={handleClick}>{skill}</button>;
        })}
      </div>
    </div>
  );
}
