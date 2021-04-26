import React from "react";
import "./EmailGenerator.css";

function EmailGenerator(props) {
  return (
    <div className="email-generator">
      <form onSubmit={props.handleGenerate} className="email-generator-form">
        <label>Your Name</label>
        <input
          name="name"
          onChange={props.handleChange}
          className="sample-email-generator-name"
          required='true'
        />
        <label>Your Company</label>
        <input
          name="company"
          onChange={props.handleChange}
          className="sample-email-generator-company"
          required='true'
        />
        <div className="sample-email-generator-skills-buttons">
          {props.mySkills.map((skill, i) => {
            return (
              <button
                className={skill[1] ? "skill-selected" : undefined}
                key={i}
                onClick={props.handleSkill}
              >
                {skill}
              </button>
            );
          })}
          <button onClick={props.handleSkill}>Select All</button>
        </div>
        <button className="generate-sample-email" type="submit">
          Generate Sample Email
        </button>
      </form>
    </div>
  );
}

export default EmailGenerator;
