import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <section className="about">
      <div className="header">
        <h2>Personal Profile</h2>
      </div>
      <div className="description">
        <p>{profile}</p>
      </div>
    </section>
  );
}

export default PersonalProfile;
