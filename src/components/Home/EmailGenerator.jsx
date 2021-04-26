import React from "react";

function EmailGenerator(props) {
  return (
    <div>
      <form onSubmit={props.handleGenerate}>
        <label>Your Name</label>
        <input name="name" onChange = {props.handleChange} className="sample-email-generator-name" />
        <label>Your Company</label>
        <input name="company" onChange = {props.handleChange} className="sample-email-generator-company" />
        <div className="sample-email-generator-skills-buttons">
          {props.mySkills.map((skill, i) => {
            return <button className={skill[1] ? 'skill-selected' : undefined} key={i} onClick={props.handleSkill}>{skill}</button>;
          })}
        </div>
        <button type="submit">Generate Sample Email</button>
      </form>
    </div>
  );
}

export default EmailGenerator;
