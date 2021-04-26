import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import EmailGenerator from "./EmailGenerator";
import EmailForm from "./EmailForm";

let subject = "Employment opportunity with ^";

let message =
  "Hello Julian, I came across your profile and noticed that you are experienced with *. I would love to discuss an employment opportunity with you. \n \n Sincerely, %";

export default function ContactMe() {
  const [mySkills, setMySkills] = useState([
    ["React", true],
    ["Redux",false],
    ["Node.js", false],
    ["Express", false],
    ["MongoDB", false],
    ["SQL", false],
    ["Ruby on Rails", false],
    ["HTML/CSS", false]
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
    let newSkills;
    if(targetSkill === 'Select All'){
      newSkills = mySkills.map((skill) => {
        return [skill[0], true];
      });
    }
    else {
      newSkills = mySkills.map((skill) => {
        return skill[0] !== targetSkill ? skill : [`${targetSkill}`, !skill[1]];
      });
    }
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
    switch (output.length){
      case 0:
        return output[0]
      case 1:
        return output[0]
      case 2:
        output.splice(output.length-1, 0, "and ");
        return output.join(" ")
      default:
        output[output.length-1] = 'and '+ output[output.length-1]
        return output.join(", ")
    }

  };

  const handleGenerate = (e) => {
    e.preventDefault();

    let sub = subject.split("");
    sub.splice(sub.indexOf("^"), 1, preGeneratedEmail.company);
    sub = sub.join("");

    let mes = message.split("");
    mes.splice(mes.indexOf("*"), 1, stringifySkills());
    mes.splice(mes.indexOf("%"), 1, preGeneratedEmail.name)
    mes = mes.join("");

    setEmail({ ...email, subject: sub, message: mes });
    setEmailGenerated(true);
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
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
