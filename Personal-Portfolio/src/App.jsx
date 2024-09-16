import React from 'react';
import { Container } from '@mui/material';
import MainSection from './components/MainSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Container>
      <MainSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export default App;
