import React from 'react';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import './App.css';

function App() {
  const data = {
    header: {
      name: 'Zh Rimel',
      email: 'abc@gmail.com',
      web: 'abc.github.io/abc',
      mobile: '01234567890',
      occupation: 'Data Scientist'
    },
    personalProfile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    experiences: [
      {
        title: 'Job Title at Company',
        duration: 'August 2022 – December 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Job Title 2 at Company 2',
        duration: 'August 2020 – December 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ],
    skills: ['A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill'],
    education: [
      {
        school: 'New Jersey Institute of Technology',
        degree: 'BS in Computer Science',
        years: '2018 - 2022',
        gpa: '3.9'
      },
      {
        school: 'New Jersey Institute of Technology',
        degree: 'MS in Data Science',
        years: '2022 - 2023',
        gpa: '4.0'
      }
    ]
  };

  return (
    <div>
      <Header info={data.header} />
      <PersonalProfile profile={data.personalProfile} />
      <WorkExperience experiences={data.experiences} />
      <Skills skills={data.skills} />
      <Education education={data.education} />
    </div>
  );
}

export default App;
