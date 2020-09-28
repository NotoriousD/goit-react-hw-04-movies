import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.root}>
            <Button variant="contained" color="secondary">
              <NavLink
                to="/"
                className={classes.link}
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </Button>
            <Button variant="contained" color="secondary">
              <NavLink
                to="/search"
                className={classes.link}
                activeClassName="active-link"
              >
                Search
              </NavLink>
            </Button>
            <Button variant="contained" color="secondary">
              <NavLink
                to="/movies"
                className={classes.link}
                activeClassName="active-link"
              >
                Movies
              </NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
