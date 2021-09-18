import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51JayolHNIHyLuixnW8OunrdjyBoCcOZlzoovdga8hRsUXpYB5M7Z8RTFj4QFmUsRb6y0tZuUmlbMYq1WJUlPxelU00ApdTfLFH';

  const onToken = (token) => {
    console.log(token);
    alert('payment succesful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='ESTORE'
      billingAddress
      shippingAddress
      image='https://i.picsum.photos/id/1043/200/200.jpg?hmac=i7xbST4bM6KMg5XsUaVYvDgwvsZ3VskoXKRqGf1BjcU'
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
