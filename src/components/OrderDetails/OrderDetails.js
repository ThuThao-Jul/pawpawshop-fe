import React, {useState} from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, ListItemText, List, ListItemAvatar, Avatar, ListItem, Divider, Typography} from "@material-ui/core";
import {Box, SpeedDial, SpeedDialAction } from "@mui/material"
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../../redux/actions/user.actions";


const actions = [
    { icon: <AddIcon />, name: 'Add more items' },
    { icon: <ShoppingCartRoundedIcon />, name: 'Return to cart' },
    { icon: <DeleteRoundedIcon />, name: 'Delete' },
  ];


const OrderDetail = () => {
    const order = useSelector((state) => state.userReducer.orders);
    const user = useSelector((state) => state.userReducer.data);
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false)};
    const handleClick = (name) => {
        if(name==="Add more items"){
            history.push("/products");
        };
        if(name==="Return to cart"){
            history.push('/cart');
        };
        if(name==="Delete"){
            dispatch(userActions.deleteOrder(order._id))
        }
    }
    
    return (
        <Grid item xs={12} md={6} className="orderDetails">
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {order.order.map((p) => {
        return (
          <ListItem key={p.product._id} disablePadding>
              <ListItemAvatar>
                <Avatar
                  alt={p.product.name}
                  src={p.product.images[0]}
                />
              </ListItemAvatar>
              <ListItemText primary={p.product.name} />

              <ListItemText 
              primary={`${p.quantity} x ${new Intl.NumberFormat('de-DE').format(p.product.price)} = ${new Intl.NumberFormat('de-DE').format(p.quantity*p.product.price)}`} 
              style={{textAlign:"right"}}
              />
            
          </ListItem>
        );
      })}
    </List>
    <Divider />

    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem disablePadding>
            <ListItemText primary="Subtotal" />
            <ListItemText primary={new Intl.NumberFormat('de-DE').format(order.totalCost)} style={{textAlign:"right"}} />
        </ListItem>
        <ListItem disablePadding>
            <ListItemText primary="Shipping" />
            <ListItemText primary="free" style={{textAlign:"right"}} />
        </ListItem>
        <ListItem disablePadding>
            <ListItemText primary="Discount" secondary={(user.tier + ' member')} />
            <ListItemText primary={order.discount*100 + '%'} style={{textAlign:"right"}} />
        </ListItem>
    </List>
    <Divider />

    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
            <ListItemText primary="Total" />
            {/* <ListItemText primary={new Intl.NumberFormat('de-DE').format(order.finalCost) + ' đ'} style={{textAlign:"right"}} /> */}
            <Typography variant="h6">{new Intl.NumberFormat('de-DE').format(order.finalCost) + ' đ'}</Typography>
        </ListItem>
    </List>

    {/* Edit button */}
    <Box sx={{ height: 250, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<EditIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>handleClick(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
        </Grid>
    )
};

export default OrderDetail;