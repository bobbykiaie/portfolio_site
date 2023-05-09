import React from 'react';
import { Typography, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const StyledAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
`;

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const About = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
  };

  const slideFromRight = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <motion.div {...fadeIn}>
          <StyledAvatar alt="Your Name" src="/path/to/your/photo.jpg" />
        </motion.div>
      </Grid>
      <Grid item xs={12} md={6}>
        <motion.div {...slideFromRight}>
          <StyledPaper>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I'm a Full Stack Developer with a passion for creating innovative and user-friendly applications. I have experience working with various web technologies and frameworks, including React, Node.js, and Python.
            </Typography>
            <br />
            <Typography variant="body1">
              I love learning about new technologies and experimenting with different programming languages. When I'm not coding, I enjoy traveling, photography, and playing soccer.
            </Typography>
            <br />
            <Typography variant="body1">
              My goal is to create cutting-edge applications that solve real-world problems and make a positive impact on users' lives. I'm always eager to collaborate on new projects and grow as a developer.
            </Typography>
          </StyledPaper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default About;
