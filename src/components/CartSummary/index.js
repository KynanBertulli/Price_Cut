import React from 'react'
// import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

export default ({
  display_price: {
    with_tax: {formatted},
  },
  sayHello,
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
        <input type="hidden" name="name" placeholder="Your Name" />
        <input type="hidden" name="email" placeholder="name@name.com" />
        <Button color="black" floated="right" onClick={sayHello}>
          Check out
        </Button>
      </form>

      <Button color="black" floated="right" onClick={sayHello}>
        Check out
      </Button>
      {/* </StripeCheckout> */}
    </Segment>
  </div>
)
