import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem';

const Cart = ({cart}) => {
       //const isEmpty = !cart.line_items;
       const classes = useStyles();
       const EmptyCart = () => (
           <Typography varient="subtitle1">Empty cart</Typography>
       )
       const FilledCart = () => (
        <div>   
          <Grid container spacing={3}>
             {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                   <CartItem item={item}/>
                </Grid>
             ))}
           </Grid>
           <div className={classes.cardDetails}>
              <Typography varient="h4">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
              <div>
                  <Button className={classes.emptyButton} size="large" type="button" varient="contained" color="secondary">Empty cart</Button>
                  <Button className={classes.checkoutButton} size="large" type="button" varient="contained" color="primary">Checkout</Button>
              </div>
           </div>
        </div>
           )
        if(!cart.line_items) return 'Loading..'   
        return(
            <Container>
              <div className={classes.toolbar} />
              <Typography className={classes.title} varient="h3">CART</Typography>
              {!cart.line_items ? <EmptyCart /> : <FilledCart />}            
            </Container>
        )
    
}

export default Cart