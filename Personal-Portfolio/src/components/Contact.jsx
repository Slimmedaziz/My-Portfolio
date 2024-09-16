import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Light background color for the form area
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        margin: '0 auto', // Center the form horizontally
        marginTop: 8, // Space from the top
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Contact
      </Typography>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="First Name"
          variant="outlined"
          placeholder="Enter your first name"
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          placeholder="Enter your last name"
          fullWidth
          required
        />
        <TextField
          label="E-mail"
          variant="outlined"
          placeholder="Enter your email"
          type="email"
          fullWidth
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          placeholder="Enter your message"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
