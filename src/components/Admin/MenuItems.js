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
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    
  </div>
)

export const EcomItems = (
    <div>
      <ListSubheader inset>E-com</ListSubheader>

      <ListItem button>
        <ListItemIcon>
          <DeliveryDiningIcon />
        </ListItemIcon>
        <ListItemText primary="Delivery status" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Service booking" />
      </ListItem>
     
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