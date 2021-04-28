import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import MainGrid from './MainGrid';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          <Typography component="div" style={{ height: '100vh' }}>
            <MainGrid/>
          </Typography>
      </Container>
    </React.Fragment>
  );
}
