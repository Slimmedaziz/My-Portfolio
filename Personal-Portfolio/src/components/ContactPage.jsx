import React from 'react';
import Contact from './Contact'; // Adjust the import path as needed

const ContactPage = () => {
  return (
    <div>
      <Typography variant="h2" sx={{ textAlign: 'center', mt: 8 }}>
        Get in Touch
      </Typography>
      <Contact />
    </div>
  );
};

export default ContactPage;
