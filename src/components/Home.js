import { Typography, Grid, Button, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import me from '../assets/me.jpeg';

const Home = () => {
  return (
    <div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" align="center">
            Hello! I am a passionate developer with experience in various technologies such as React, Node.js, and Python. I love creating visually appealing and functional applications that solve real-world problems.
          </Typography>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            View My Projects
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={me}
            alt="Your Name"
            style={{ width: '100%', borderRadius: '50%', maxWidth: '300px', margin: '0 auto', display: 'block', }}
          />
        </Grid>
      </Grid>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Box
          component={Paper}
          padding={4}
          bgcolor="primary.main"
          color="primary.contrastText"
          elevation={8}
          marginTop={4}
        >
          <Typography variant="h4" gutterBottom>
            Technologies Used
          </Typography>
          <Typography variant="body1">React</Typography>
          <Typography variant="body1">Material-UI</Typography>
          <Typography variant="body1">Framer Motion</Typography>
          <Typography variant="body1">React Router</Typography>
        </Box>
      </motion.div>
    </div>
  );
};

export default Home;
