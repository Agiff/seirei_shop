import React from 'react';

import Review from './Review.jsx';

const PaymentForm = ({ checkoutToken }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
    </>
  )
}

export default PaymentForm
