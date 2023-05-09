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
