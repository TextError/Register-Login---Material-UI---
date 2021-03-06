import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// Css
import '../../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className='nav-container'>
          <Button color='inherit' component={Link} to='/'>Home</Button>
          <Button color='inherit' component={Link} to='/sign-up'>Sign Up</Button>
          <Button color='inherit' component={Link} to='/sign-in'>Sign In</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
