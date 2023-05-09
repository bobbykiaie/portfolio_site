import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import sampleProject1 from '../assets/sample_project_1.jpg';
import sampleProject2 from '../assets/sample_project_2.jpg';

const sampleProjects = [
  {
    id: 1,
    title: 'Sample Project 1',
    description: 'This is a description of Sample Project 1. It is an amazing project with lots of cool features.',
    image: sampleProject1,
  },
  {
    id: 2,
    title: 'Sample Project 2',
    description: 'This is a description of Sample Project 2. It is another fantastic project with innovative solutions.',
    image: sampleProject2,
  },
];

const ProjectCard = ({ project }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={project.image} alt={project.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

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
