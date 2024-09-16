import React from 'react';
import { Link } from 'react-scroll';
import { Button, Typography, Box } from '@mui/material';

const MainSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: `url(../assets/backgroundImage.jpg)`, // Corrected path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navigation Bar */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          gap: 2,
        }}
      >
        <Button component={Link} to="about" smooth={true} duration={500}>
          About
        </Button>
        <Button component={Link} to="skills" smooth={true} duration={500}>
          Skills
        </Button>
        <Button component={Link} to="projects" smooth={true} duration={500}>
          Projects
        </Button>
        <Button component={Link} to="contact" smooth={true} duration={500}>
          Contact
        </Button>
      </Box>

      {/* Welcome Phrase */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
        }}
      >
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
          Welcome to My Portfolio
        </Typography>
      </Box>

      {/* Main Section Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1, // Ensure it is on top of the background image
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          WHO'S LadZiiz?
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Welcome to My Portfolio
        </Typography>
        <Button
          component={Link}
          to="about"
          smooth={true}
          duration={500}
          variant="contained"
          color="primary"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default MainSection;
