import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Resume from './components/Resume';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9oo7jpxb8-dz1jaJWn93vUSqZr6MLVI",
  authDomain: "portfolio-site-910c4.firebaseapp.com",
  projectId: "portfolio-site-910c4",
  storageBucket: "portfolio-site-910c4.appspot.com",
  messagingSenderId: "81523491590",
  appId: "1:81523491590:web:06918465d79948a4d7d487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </StyledContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
