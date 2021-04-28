import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import GlobalData from './GlobalData';
import { Chart } from './Chart';
import { CountryPicker } from './CountryPicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  let state = {
    country: ''
  }

  const handleCountryChange = async (country) => {
    console.log(country);
    state.country = country
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
              <GlobalData />
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.paper}>
              <CountryPicker handleCountryChange={handleCountryChange} />
              <br/>
              <br/>
              <br/>
              <br/>
              <Chart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
