import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../logo1.png';

//Elevation Scroll Navbar
function ElevationScroll(props) {
  const {children} = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

//Defining Internal Style
const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    marginRight: '10px',
    paddingRight: '10px',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    minWidth: 20,
    marginLeft: '20px',
  },
  btngroup: {
    paddingRight: '10px',
  },

  drawerIcon: {
    height: '50px',
    width: '50px',
    color: 'white',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
  },
}));

function Navbar() {
  //Check if Logged In
  const isLoggedIn = false;

  //Active Tabs
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  //Menu Tabs
  const [anchorEl, setanchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  //close menu after click
  const handleClose = (e) => {
    setanchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {name: 'Username', link: '/'},
    {name: 'Profile', link: '/profile'},
    {name: 'Log Out', link: '/logout'},
  ];

  const handleMenuClick = (e, i) => {
    setanchorEl(null);
    setOpenMenu(false);
  };

  //For Responsive
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    switch (window.location.pathname) {
      case '/': {
        if (value !== 0) {
          setValue(0);
        }
        break;
      }
      case '/faq': {
        if (value !== 1) {
          setValue(1);
        }
        break;
      }
      case '/discussion': {
        if (value !== 2) {
          setValue(2);
        }
        break;
      }
      case '/profile': {
        if (value !== 3) {
          setValue(3);
        }
        break;
      }
      case '/logout': {
        if (value !== 3) {
          setValue(3);
        }
        break;
      }
      default:
        break;
    }
  }, [value]);

  const loggedInMenu = (
    <Fragment>
      <Tabs>
        <Tab
          component={Link}
          to='/'
          label='Username'
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={(event) => handleClick(event)}
        />
      </Tabs>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{onMouseLeave: handleClose}}
        classes={{paper: classes.menu}}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{root: classes.menuitem}}
            onClick={(event) => {
              handleMenuClick(event, i);
              setValue(1);
              handleClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const loggedOutMenu = (
    <ButtonGroup className={classes.btngroup}>
      <Button
        variant='contained'
        color='secondary'
        component={Link}
        to='/login'
      >
        Log In
      </Button>
      <Button
        variant='contained'
        color='secondary'
        component={Link}
        to='/signup'
      >
        Sign Up
      </Button>
    </ButtonGroup>
  );
  const commonMenu = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab label='Home' className={classes.tab} component={Link} to='/' />
        <Tab label='FAQ' className={classes.tab} component={Link} to='/faq' />
        <Tab
          label='Discussion'
          className={classes.tab}
          component={Link}
          to='/discussion'
        />
      </Tabs>
      {isLoggedIn ? loggedInMenu : loggedOutMenu}
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        anchor={'top'}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <List disablePadding className>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/faq'
          >
            <ListItemText>FAQ</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/discussion'
          >
            <ListItemText>Discussion</ListItemText>
          </ListItem>
        </List>
        {isLoggedIn ? (
          <>
            {' '}
            <List>
              <ListItem
                divider
                button
                onClick={() => setOpenDrawer(false)}
                component={Link}
                to='/profile'
              >
                <ListItemText>Profile</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem
                divider
                button
                onClick={() => setOpenDrawer(false)}
                component={Link}
                to='/logout'
              >
                <ListItemText>Logout</ListItemText>
              </ListItem>
            </List>{' '}
          </>
        ) : (
          <>
            {' '}
            <List>
              <ListItem
                divider
                button
                onClick={() => setOpenDrawer(false)}
                component={Link}
                to='/login'
              >
                <ListItemText>Login</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem
                divider
                button
                onClick={() => setOpenDrawer(false)}
                component={Link}
                to='/signup'
              >
                <ListItemText>Sign Up</ListItemText>
              </ListItem>
            </List>{' '}
          </>
        )}
      </SwipeableDrawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button component={Link} to='/'>
              <img src={logo} alt='Logo' />
            </Button>
            {matches ? drawer : commonMenu}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default Navbar;
