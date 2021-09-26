import { Grid, Box, List, ListItemButton, InputBase, Autocomplete, TextField,
Card, CardActionArea, CardMedia, CardContent, CardActions, Typography,
Stack, Pagination} from "@mui/material";
import {Button, CircularProgress, IconButton, Collapse} from "@material-ui/core"
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@mui/material/styles';
import React, {useEffect, useState} from "react";
import AirbnbSlider from "./SliderStyle";
import useStyles from "../NavBar/Style";
import "./ProductStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { useHistory } from "react-router-dom";
import { userActions } from "../../redux/actions/user.actions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Products = () => {
  const productReducer = useSelector((state) => state.productReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState('ALL')
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [priceRange, setPriceRange] = useState([0,700000]);
  const [filter, setFilter] = useState({
    "price": null,
    "category": null,
    "name": null,
    "page": 1,
    "limit": 6,
    "from": 0,
    "to": 700000,
  });
  // console.log(priceRange)
  console.log(filter)

  useEffect(()=>{
    dispatch(productActions.getAllCategories());
  },[dispatch])

  useEffect(()=>{
     dispatch(productActions.getAllProducts(filter))
  },[dispatch, filter])

  const defaultProps = {
    options: ["ascending", "descending"],
    getOptionLabel: (option) => option,
  };

  const handleExpandClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const handleSort=(e)=>{
    e.preventDefault();
    if (e.target.value === "descending") {
      setFilter({...filter, "price": '-price'})
    } else {
      setFilter({...filter, "price": 'price'})
    }
  }

  const handlePage=(e,page)=>{
    e.preventDefault();
    setFilter({...filter, "page": page})
  }

  const handlePriceChange=(e, newValue) =>{
    e.preventDefault();
    setPriceRange(newValue)
  }

  const handleSubmitChange=(e) => {
    e.preventDefault();
    setFilter({...filter, "from": priceRange[0], "to": priceRange[1]})
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    if(e.keyCode === 13){
      setFilter({...filter, "name": e.target.value})
    }
  };

  const handleCategory = (e)  => {
    console.log(e.target.title)
    e.preventDefault();
    setCategory(e.target.title);
    setExpanded(!expanded);
    if(e.target.title === "all"){
      setFilter({...filter, "category": null})
    } else
    if(e.target.title === "snack & milk"){
      setFilter({...filter, "category": "snack %26 milk"})
    } else {
      setFilter({...filter, "category": e.target.title})
    }
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
    event.preventDefault();
    setSelectedIndex(index);
  };
    
  const handleCart = (id) => {
    dispatch(userActions.addToCart({"id": id, "quantity": 1}));
  }

    return (
      <Grid container className="productContainer" style={{marginTop:"2%", padding:"1%"}}>
        <Grid item xs={12} md={3} className="leftGrid">

            {/* Price range */}
            <div style={{margin:"2%", display:"flex", flexDirection:"column", alignItems:"center", lineHeight:"3rem"}}>
            <Typography variant="h8">
              Price range:<b> {new Intl.NumberFormat('de-DE').format(priceRange[0])}</b> - <b>{new Intl.NumberFormat('de-DE').format(priceRange[1])}</b> VND
            </Typography>
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              defaultValue={[0, 700000]}
              max={700000}
              min={0}
              onChange={handlePriceChange}
            />
            <Button variant="contained" color="secondary" onClick={handleSubmitChange} style={{marginBottom:"8%"}}>Apply</Button>
            </div>
            <hr />

            {/* Categories */}
            {productReducer.loading ? (
              <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <CircularProgress />
              <Typography variant="h6" align="center">I'm on my way...Meow</Typography>
            </Stack>
            ) :(productReducer.categories && <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="categories">
               <List component="nav" aria-label="categories">
                   <Typography variant="h5" className="typo" style={{fontFamily:"Suez One"}}>CATEGORIES</Typography>
                <hr />

                <div className="categoriesDesktop">
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                > 
                <div style={{height:"100%", width:"100%", paddingLeft:"5%"}}>
                  <p title="all" onClick={handleCategory} style={{fontFamily:"Roboto"}}>
                  ALL
                  </p>
                </div>
                </ListItemButton>
                </div>
               
               <div className="categoriesDesktop">
               {productReducer.categories.map((c) => 
            <ListItemButton
            selected={selectedIndex === (productReducer.categories.indexOf(c)+1)}
            onClick={(event) => handleListItemClick(event, productReducer.categories.indexOf(c)+1)}
          >
            <div style={{height:"100%", width:"100%", paddingLeft:"5%"}}>
            <p title={c} onClick={handleCategory} style={{fontFamily:"Roboto"}}>
              {c.toUpperCase()}
            </p>
            </div>
          </ListItemButton>
          )}
          </div>

          {/* // For mobile */}
          <div className="categoriesMobile">
        <div style={{display:"flex", paddingLeft:"10%"}}>
        <Typography variant="h6" noWrap> {category.toUpperCase()} </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
            > 
                <div style={{height:"100%", width:"100%", paddingLeft:"5%"}}>
                  <p title="all" onClick={handleCategory} style={{fontFamily:"Roboto"}}>
                  ALL
                  </p>
                </div>
            </ListItemButton>

               {productReducer.categories.map((c) => 
               
            <ListItemButton
            selected={selectedIndex === (productReducer.categories.indexOf(c)+1)}
            onClick={(event) => handleListItemClick(event, productReducer.categories.indexOf(c)+1)}
          >
            <div style={{height:"100%", width:"100%", paddingLeft:"5%"}}>
            <p title={c} onClick={handleCategory} style={{fontFamily:"Roboto"}}>
              {c.toUpperCase()}
            </p>
            </div>
          </ListItemButton>
          )}
        </Collapse>
        </div>


              </List>
            </Box>
            )}
          
        </Grid>

        
        {/* Sort by price */}
        <Grid item xs={12} md={9} style={{display:"flex", flexDirection:"column", paddingLeft:"2%"}}>
          <div className="SortAndSearch">
          <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="Sort by price" variant="standard" />
        )}
        style={{width:"15%"}}
        onSelect={handleSort}
      />
          
        <div className={classes.search} style={{marginTop:'1%'}}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={handleSearch}
              />
        </div>
        </div>

         {/* Product cards */}
          <Grid container>
            {productReducer.loading ? (
              <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                 <CircularProgress />
              <Typography variant="h6" align="center">I'm on my way...Meow</Typography>
            </Stack>
            ) : (productReducer.products && productReducer.products.map((p) => 
              <Grid item xs={12} md={6} lg={4} 
              key={p._id} 
              className="productCard" 
              style={{ marginBottom:"4%"}}
              >
              <Card sx={{ maxWidth: 280 }}>
          <CardActionArea style={{height:"330px"}} onClick={() => history.push(`/products/${p._id}`)}>
          <CardMedia
            component="img"
            height="220rem"
            image={p.images[0]}
            alt={p.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" noWrap>
              {p.name}
            </Typography>
            <Typography variant="body2" align="center" style={{color:"gray"}}>
              <b>{new Intl.NumberFormat('de-DE').format(p.price)} VND</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <ShareIcon color="action"/>
          </Button>
          <Button size="small" color="primary" onClick={()=>handleCart(p._id)}>
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
          </Card>
              </Grid>
            )
            )}
            
            
           
          </Grid>
          <div style={{marginTop:"2%", alignSelf:"center"}}>
          <Stack spacing={2}>
      <Pagination 
      count={productReducer.totalPages} 
      showFirstButton showLastButton 
      color="primary" 
      onChange={handlePage}
      />
           </Stack>
          </div>
        </Grid>
  </Grid>
    )
};

export default Products;