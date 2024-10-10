import React from 'react';

function Education({ education }) {
  return (
    <section className="education">
      <div className="header">
        <h2>Education</h2>
      </div>
      <div className="description">
        {education.map((edu, index) => (
          <div key={index} className="school">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.years}, GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
