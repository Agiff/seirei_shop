import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import CustomTextField from './CustomTextField';

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

  useEffect (() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <CustomTextField required name='firstName' label='First name' />
            <CustomTextField required name='lastName' label='Last name' />
            <CustomTextField required name='address1' label='Address' />
            <CustomTextField required name='email' label='Email' />
            <CustomTextField required name='city' label='City' />
            <CustomTextField required name='zip' label='ZIP / Postal Code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
