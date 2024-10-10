import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <section className="experience">
      <div className="header">
        <h2>Work Experience</h2>
      </div>
      <div className="description">
        {experiences.map((exp, index) => (
          <div key={index} className="job">
            <h3>{exp.title}</h3>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
