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
    height: 150,
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
      lineHeight: 3,
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

  return (
    <div className={classes.root}>
        { globalData &&
          Object.keys(globalData).map((key, ind) => {
            if (ind % 2 !== 0)
              return (
                <Paper className={classes.paper} elevation={5} key={ind}>
                  <div className={typoClasses.root}>
                      <Typography variant="h4" gutterBottom className={typoClasses.number}>
                          {globalData === undefined ? '.....' : <NumberFormat value={globalData[key]} displayType={'text'} thousandSeparator={true}/>}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom  className={typoClasses.description}>
                          {key}
                      </Typography>
                  </div>
                </Paper>
              )
          })
        }
    </div>
  );
}
