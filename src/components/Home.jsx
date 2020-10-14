import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
            <Link to="/series">SERIES</Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Link to="/movies">PELICULAS</Link>
          </Typography>
        </CardContent>
      </Card>
      </Grid>
    </Grid>
  )
}

export default Home;

