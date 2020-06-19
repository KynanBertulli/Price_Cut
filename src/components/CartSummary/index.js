/* eslint-disable react/button-has-type */
import React from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// import {Item} from 'semantic-ui-react'
// import items from CartItemList
// import CartItemList from '../CartItemList'
import {Segment, Divider} from 'semantic-ui-react'

export default ({
  display_price: {
    with_tax: {quantity, name, amount, currency, formatted},
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
        {` ${formatted}`}
      </span>
      {/* <StripeCheckout
        name="Gatsby Store"
        amount={amount}
        currency={currency || 'GBP'}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || ''}
        shippingAddress={false}
        billingAddress
        zipCode
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      > */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="botfield"
      >
        <input type="hidden" name={amount} placeholder="Your Name" />
        <input type="hidden" name={currency} placeholder="name@name.com" />
        <input type="hidden" name={name} placeholder="name@name.com" />
        <input type="hidden" name={quantity} placeholder="name@name.com" />
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />

        <button type="foo">Check out</button>
      </form>

      {/* <Button color="black" floated="right" onClick={sayHello}>
        Check out
      </Button> */}
      {/* </StripeCheckout> */}
    </Segment>
  </div>
)
