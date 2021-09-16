import { Typography } from "@material-ui/core";
import { Grid, Box, List, ListItemButton, ListItemText } from "@mui/material";
import React, {useState} from "react";
import AirbnbSlider from "./SliderStyle";


const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [price, setPrice] = useState([0,2000000]);

  const handlePriceChange=(e, newValue) =>{
    setPrice(newValue)
  }
   
  const AirbnbThumbComponent = (props) =>{
        return (
          <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
        );
      }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    

    return (
        <Grid item xs={12} md={3}>

            {/* Price range */}
            <div style={{margin:"2%"}}>
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              defaultValue={[0, 2000000]}
              max={2000000}
              min={0}
              onChange={handlePriceChange}
            />
            <Typography variant="h8">Price: {new Intl.NumberFormat('de-DE').format(price[0])} - {new Intl.NumberFormat('de-DE').format(price[1])} VND</Typography>
            </div>

            {/* Categories */}
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Inbox" />
        </ListItemButton>
        
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Drafts" />
        </ListItemButton>
     
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
            
        </Grid>
    )
};

export default Categories;