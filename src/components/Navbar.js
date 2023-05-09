import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box>
          <Button color="primary" component={NavLink} to="/" exact activeClassName="active-link">
            Home
          </Button>
          <Button color="primary" component={NavLink} to="/projects" activeClassName="active-link">
            Projects
          </Button>
          <Button color="primary" component={NavLink} to="/resume" activeClassName="active-link">
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
