import React, { useState } from "react";
import ContactMe from "./ContactMe";
import "./Home.css";

function Home() {

  const [skills, setSkills] = useState([])
  const [mySkills, setMySkills] = useState([['react',false],['node',false],['redux',false]])

  const handleClick = e => {
    e.preventDefault()
    let targetSkill = e.target.textContent
    setSkills([...skills,targetSkill])
    let newSkills = mySkills.map(skill => {
      return skill[0] !== targetSkill
        ? skill
        : [`${targetSkill}`, !skill[1]];
    })
    setMySkills([...newSkills])
  }
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <h1>I'm Julian Tipler!</h1>
          <div>
            <div>text about me</div>
          </div>
        </div>
        <div className="home-right">
          <img alt="myself here"></img>
        </div>
      </div>
      <div className="home-bottom">
        <ContactMe skills={skills}/>
      <div className='home-skills-buttons'>
        {mySkills.map(skill=>{
          return <button onClick={handleClick}>{skill}</button>
        })}
      </div>
      </div>
    </div>
  );
}

export default Home;
