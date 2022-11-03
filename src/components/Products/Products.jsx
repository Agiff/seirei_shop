import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'},
  { id: 2, name: 'Laptop', description: 'Asus Laptop.', price: '$10', image: 'https://image.shutterstock.com/image-photo/poznan-pol-sep-23-2020-260nw-1849577599.jpg'},
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
