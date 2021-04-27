import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
  paper: {
    height: 120,
    padding: theme.spacing(2),
    textAlign: 'center', 
    color: theme.palette.text.secondary,
    background: '#DDF0F0',
  },
}));


const useStylesTypo = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    description: {
      color: '#00686B',
      fontWeight: 'bold',
      fontSize: 26,
    },
    number: {
      color: '#003335',
      fontSize: 19,
      lineHeight: 2,
      fontWeight: 'bold',
    }
  });

export default function GlobalData() {
  const classes = useStyles();
  const typoClasses = useStylesTypo();

  const [globalData ,setGlobalData] = useState();

  const fetchGlobalData = async () => {
    const response = await fetch('https://api.covid19api.com/summary');
    let data = await response.json();
    setGlobalData(data.Global);
  };


  useEffect(() => {
    fetchGlobalData();
  }, []);

console.log(globalData);
  return (
    <div className={classes.root}>
      
        <Paper className={classes.paper} elevation={3}>
            <div className={typoClasses.root}>
                <Typography variant="h4" gutterBottom className={typoClasses.number}>
                    {globalData === undefined ? '.....' : <NumberFormat value={globalData.NewConfirmed} displayType={'text'} thousandSeparator={true}/>}
                </Typography>
                <Typography variant="subtitle2" gutterBottom  className={typoClasses.description}>
                    New Confirmed
                </Typography>
            </div>
        </Paper>
    </div>
  );
}
