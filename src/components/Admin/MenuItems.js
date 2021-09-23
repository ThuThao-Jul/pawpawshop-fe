import React from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BookIcon from '@material-ui/icons/Book';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import EmojiEventsRoundedIcon from '@material-ui/icons/EmojiEventsRounded';
import { ListSubheader, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";


  
export const DashboardItems = (
    <div>
        <ListSubheader inset>Dashboard</ListSubheader>
    <a href="#orders" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    </a>
    <a href="#services" style={{textDecoration:"none"}} >
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    </a>
    
  </div>
)

export const EcomItems = (
    <div>
      <ListSubheader inset>E-com</ListSubheader>

      <a href="#delivery" style={{textDecoration:"none"}}>
      <ListItem button>
        <ListItemIcon>
          <DeliveryDiningIcon />
        </ListItemIcon>
        <ListItemText primary="Delivery status" />
      </ListItem>
      </a>
      <a href="#booking" style={{textDecoration:"none"}}>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Service booking" />
      </ListItem>
      </a>
     
    </div>
  );

export const Events = (
    <div>
      <ListSubheader inset>Events</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Create new" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmojiEventsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="All events" />
      </ListItem>
     
    </div>
)