import React, { useEffect, useState} from "react";
import useStyles from "./Style";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Drawer, List, ListItem, Button, Divider} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";
import ProfilePopup from "../ProfilePopup";

const NavBar = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.data);
    const cart = useSelector((state) => state.userReducer.cart)
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [mobileMainMenu, setMobileMainMenu] = useState(false);
    const [openProfile, setOpenProfile] = useState(false)
    const history = useHistory();
    // let cart = 0;    
 
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // if (user) {
    //   cart = user.cart.length;
    // };

    useEffect(() => {
      dispatch(userActions.getUserProfile())
    },[dispatch])

    const handleClickProduct = () =>{
       history.push('/products')
    }

    const handleClickHome=()=>{
      history.push('/')
    }

    //for mobile
    const handleProfileMenuOpen = (event) => {
      console.log(event.currentTarget)
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleProfile = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
      setOpenProfile(!openProfile);
      console.log('pop up')
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleLogOut = () => {
      dispatch(userActions.logOut());
      setAnchorEl(null)
    }
  
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
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
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

      {/* Check if display user menu or non-user menu */}
       { user ? 
          ( <div>
            <MenuItem onClick={() => history.push('/cart')}>
          <IconButton aria-label= "show number of product in cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Your cart</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
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
        </div>)
         : 
          (<div>
            <MenuItem>
          <Button onClick={()=> history.push('/login')} color="inherit"><b>Login</b></Button>
        </MenuItem>
        <MenuItem>
          <Button onClick={()=> history.push('/register')} color="inherit">Register</Button>
        </MenuItem>
        </div>)}
     
     
     
     
      </Menu>
    );

  
    //for PC
    return (
      <div className={classes.grow} style={{zIndex:'5'}}>
         <AppBar position="static" style={{backgroundColor: "white", color:"#3D087B", fontWeight:"bolder"}}>
          <Toolbar>
          <ProfilePopup openProfile={openProfile} setOpenProfile={setOpenProfile}/>
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
        <Typography variant="h5" noWrap style={{fontFamily:'Noto Serif'}}>
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
        style={{width:"0"}}
      >
          
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
              <ListItem button onClick={handleClickHome}>Home</ListItem>
              <ListItem button onClick={handleClickProduct}>Products</ListItem>
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
            <MenuItem onClick={handleClickHome} style={{ fontFamily:'Suez One', fontSize:'large'}}>Home</MenuItem>
            <MenuItem onClick={handleClickProduct} style={{ fontFamily:'Suez One', fontSize:'large'}}>Products</MenuItem>
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

            
            {/* Check if display user menu or non-user menu */}
            {user ? ( <div style={{display:"flex"}}>
              <IconButton aria-label="show number of product in cart" color="inherit" onClick={() => history.push('/cart')}>
                <Badge badgeContent={cart.length} color="secondary">
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
            ) : ( <div style={{display:"flex"}}>
              <Button onClick={()=> history.push('/login')} color="inherit" style={{ fontFamily:'Suez One'}}>
                <b>Login</b>
              </Button>
              <Button onClick={()=> history.push('/register')} color="inherit" style={{ fontFamily:'Suez One'}}>
                Register
              </Button>
              </div>
            )}
              


             


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
        {renderMobileMenu}
        {renderMenu}
            </div>
          </Toolbar>
        </AppBar>

        
      </div>
    );
  }

export default NavBar