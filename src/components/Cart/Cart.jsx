import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart,onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
       const classes = useStyles();
       const EmptyCart = () => (
           <Typography varient='h1'>Empty cart</Typography>
       )
       const FilledCart = () => (
        <div> 
          <Typography className={classes.title} varient='h3'>YOUR CART</Typography>  
          <Grid container spacing={3}>
             {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                   <CartItem  onUpdateCartQty={ onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}  item={item}/>
                </Grid>
             ))}
           </Grid>
           <div className={classes.cardDetails}>
              <Typography varient="h4">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
              <div>
                  <Button onClick={onEmptyCart} className={classes.emptyButton} size="large" type="button" varient="contained" color="secondary">Empty cart</Button>
                  <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" varient="contained" color="primary">Checkout</Button>
              </div>
           </div>
        </div>
           )
        if(!cart.line_items) return 'Loading..'   
        return(
            <Container>
              <div className={classes.toolbar} />
              {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}            
            </Container>
        )
    
}

export default Cart