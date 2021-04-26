import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import EmailGenerator from "./EmailGenerator";
import EmailForm from "./EmailForm";

let subject = "Employment opportunity with ^";

let message =
  "Hello Julian, I came across your profile and was impressed at your skill with *. I would love to discuss this opportunity with you further. \n \n Sincerely, %";

export default function ContactMe() {
  const [mySkills, setMySkills] = useState([
    ["react", false],
    ["node", false],
    ["redux", false],
  ]);

  const [preGeneratedEmail, setPreGeneratedEmail] = useState({
    name: "",
    company: "",
  });

  const [email, setEmail] = useState({
    subject: "",
    message: "",
  });

  const [emailGenerated, setEmailGenerated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setEmailSent("sending");
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

  const handleSkill = (e) => {
    e.preventDefault();
    let targetSkill = e.target.textContent;
    let newSkills = mySkills.map((skill) => {
      return skill[0] !== targetSkill ? skill : [`${targetSkill}`, !skill[1]];
    });
    setMySkills([...newSkills]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPreGeneratedEmail({
      ...preGeneratedEmail,
      [e.target.name]: e.target.value,
    });
  };

  const stringifySkills = () => {
    let output = [];
    for (let skill of mySkills) {
      skill[1] && output.push(skill[0]);
    }
    if(output.length>1) {
      if(output.length>2) {
        output[output.length-1] = 'and '+ output[output.length-1]
        return output.join(", ")
      }
      else {
        output.splice(output.length-1, 0, "and ");
        return output.join(" ")
      }
    }
    else {
      return output[0]
    }
    

  };

  const handleGenerate = (e) => {
    e.preventDefault();

    let sub = subject.split("");
    sub.splice(sub.indexOf("^"), 1, preGeneratedEmail.company);
    sub = sub.join("");

    let mes = message.split("");
    mes.splice(mes.indexOf("*"), 1, stringifySkills());
    mes = mes.join("");

    setEmail({ ...email, subject: sub, message: mes });
    setEmailGenerated(true);
  };

  return (
    <div className="contact-me">
      {!emailGenerated && (
        <EmailGenerator
          handleSkill={handleSkill}
          mySkills={mySkills}
          handleGenerate={handleGenerate}
          handleChange={handleChange}
        />
      )}
      {emailGenerated && !emailSent && (
        <EmailForm sendEmail={sendEmail} email={email} />
      )}
      {emailSent === "sending" ? <div>sending...</div> : undefined}
      {emailSent === true && (
        <div>
          Thank you for your interest! I will do my best to reply to you within
          1-2 days.
        </div>
      )}
    </div>
  );
}
