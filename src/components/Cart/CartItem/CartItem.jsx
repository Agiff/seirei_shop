import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
  const classes = useStyles();

  // console.log(item);

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol.slice(0, -3).replace("Rp", "Rp ")}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
