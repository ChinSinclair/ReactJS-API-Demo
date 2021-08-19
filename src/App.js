import './App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

// Data.js import to display table data
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <h4>MANAGEMENT</h4>
        <h1>Clients</h1>
        
        {/* Table.js, API data fetching, displaying, and searching */}
        <Table />
      </Container>
      </main>
    </div>
  );
}

export default App;
