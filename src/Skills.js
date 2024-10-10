import React from 'react';

function Skills({ skills }) {
  return (
    <section className="key-skills">
      <div className="header">
        <h2>Key Skills</h2>
      </div>
      <div className="description">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <ul key={index}>
              <li>{skill}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
