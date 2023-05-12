import React from 'react';
import resume from '../assets/resume.jpg'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href='https://drive.google.com/file/d/1bWywPk1VTizbAROVytkjEBSt1Bw3eIcL/view?usp=sharing'>Download</a>
      <img src={resume} alt="Resume" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
