import React from 'react'
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './Styles'
import {Link,useLocation} from 'react-router-dom';



function Navbar({cart}) {
  const location = useLocation();
  const classes = useStyles()
    return (
        <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src='../images/cart.png' alt="commerce.js" height="25px" className={classes.image} /> Shoppy
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cart.total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Navbar
