import React, {useState} from "react";
import useStyles from "./Style";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Drawer, List, ListItem} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';

const NavBar = () =>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [mobileMainMenu, setMobileMainMenu] = useState(false);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  

    //for mobile
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setMobileMainMenu(true);
      };
    
    const handleDrawerClose = () => {
        setMobileMainMenu(false);
      };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

  
    //for PC
    return (
      <div className={classes.grow}>
         <AppBar position="static" style={{backgroundColor: "white", color:"#3D087B", fontWeight:"bolder"}}>
          <Toolbar>
            
                <div className={classes.sectionMobile}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, mobileMainMenu && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        
        <img src="https://i.ibb.co/PMYt7tW/logo.png" alt="logo" width="50" height="50" />
        <Typography variant="h4" noWrap style={{fontFamily:'Noto Serif'}}>
            PawPaw
        </Typography>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={mobileMainMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
              <ListItem button>Home</ListItem>
              <ListItem button>Products</ListItem>
              <ListItem button>Services</ListItem>
              <ListItem button>Event</ListItem>
              <ListItem button>Contact</ListItem>
        </List>
        </Drawer>
                </div>

         
            <div className={classes.sectionDesktop} style={{ width:'100%'}}>
            <img src="https://i.ibb.co/PMYt7tW/logo.png" alt="logo" width="50" height="50" />
            <Typography className={classes.title} variant="h4" noWrap style={{fontFamily:'Noto Serif'}}>
              PawPaw
            </Typography>
            
            <div className={classes.sectionDesktop} style={{marginLeft:'4%'}}>
            <MenuItem style={{ fontFamily:'Suez One', fontSize:'large'}}>Home</MenuItem>
            <MenuItem style={{ fontFamily:'Suez One', fontSize:'large'}}>Products</MenuItem>
            <MenuItem style={{ fontFamily:'Suez One', fontSize:'large'}}>Services</MenuItem>
            <MenuItem style={{ fontFamily:'Suez One', fontSize:'large'}}>Event</MenuItem>
            <MenuItem style={{ fontFamily:'Suez One', fontSize:'large'}}>Contact</MenuItem>
            </div>
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <div className={classes.search} style={{marginTop:'2%', width:'100%'}}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
        {renderMobileMenu}
        {renderMenu}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default NavBar