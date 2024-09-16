import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{ p: 4, textAlign: 'center', backgroundColor: '#f5f5f5' }}
    >
      {/* Headings */}
      <Typography variant="h4" sx={{ mb: 2 }}>
        INTRODUCTION
      </Typography>
      <Typography variant="h2" sx={{ mb: 4 }}>
        ABOUT ME
      </Typography>

      {/* Personal Paragraph */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Hello there! I'm so happy you are here! (:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        My name is Mohamed Aziz, I'm 23, and a FullStack JavaScript Developer
        based in Tunisia. I have a strong passion for technologies related to
        web development and AI.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Outside of my regular activities, I'm a football enthusiast and player.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        I'm continuously thrilled to partner with individuals and teams who
        wholeheartedly embrace my fervor for crafting extraordinary experiences.
        Your visit to my portfolio is deeply appreciated!
      </Typography>
      <Link
        href="/Slim Mohamed Aziz.pdf"
        download
        sx={{
          textDecoration: 'underline',
          color: 'primary.main',
          fontWeight: 'bold',
          display: 'inline-block',
          mt: 2,
        }}
      >
        You can download my resume here
      </Link>
    </Box>
  );
};

export default About;
