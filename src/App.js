import './App.css';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// Data.js import to display table data
import Table from './Table';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

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

  padding: {
    marginLeft: theme.spacing(1)
  }

}));

function App() {
  const classes = useStyles();
  const fixedHeightPaperTable = clsx(classes.paper, classes.fixedHeightTable);
  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <h4>MANAGEMENT</h4>
        <h1>Clients</h1>

        <form noValidate autoComplete="off">
          <Box display="flex" flexWrap="wrap">
            <Box p={1} flexGrow={1}>
              <TextField id="outlined-basic" label="Search" variant="outlined" size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="outlined" color="primary" className={classes.padding}>SEARCH</Button> 
              <Button variant="outlined" color="primary" type="reset" className={classes.padding}>CLEAR</Button>  
            </Box>
            <Box p={1}>
              <Button variant="outlined" color="primary"><AddIcon />NEW CLIENT</Button>
            </Box>
          </Box>
        </form>

        <br />                  
        
        {/* Data.js, API data fetching and displaying */}
        <Table />
      </Container>
      </main>
    </div>
  );
}

export default App;
