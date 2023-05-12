import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import sampleProject1 from '../assets/sample_project_1.png';
import sampleProject2 from '../assets/sample_project_2.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const sampleProjects = [
  {
    id: 1,
    title: 'Work Out Volume Tracker (iOS & Web)',
    description: 'Training Volume Tracker is a React application for creating workout routines and tracking exercise sets. It allows users to visualize their daily workout volume, making it easier to manage and optimize their fitness routines. This app also comes with an iOS version for convenience and portability.',
    image: sampleProject1,
    link: 'https://github.com/bobbykiaie/training-volume'
  },
  {
    id: 2,
    title: 'Tool Life Tracking System',
    description: 'Tool Life Management Application. Use in CNC Production setting to monitor life cycle of machining tools. Perform tool life studys and compare tooling quality by brand. See summary of data with Box Plot Statistical analysis to determine a standard range.',
    image: sampleProject2,
    link: 'https://github.com/bobbykiaie/tool-life'
  },
];
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});


const ProjectCard = ({ project }) => {
  const classes = useStyles();
  return(
<Link to={project.link} className={classes.link} >
  <Card sx={{ maxWidth: 345 }} >
    <CardActionArea>
      <CardMedia component="img" height="140" image={project.image} alt={project.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
  {project.description}
</Typography>

      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
);}

const Project = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Grid container spacing={4}>
        {sampleProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Project;
