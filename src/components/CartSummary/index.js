/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      {/* <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="botfield"
      >
        <p>
          <input type="hidden" name="form-name" value="Contact Form" />
          <input
            type="hidden"
            name="Name"
            value={amount}
            placeholder="Your Name"
          />
        </p>
        <input
          type="hidden"
          name="email"
          value={currency}
          placeholder="name@name.com"
        />
        <input
          type="hidden"
          name="value"
          value={name}
          placeholder="name@name.com"
        />
        <input
          type="hidden"
          name="quantity"
          value={quantity}
          placeholder="name@name.com"
        />
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />

        <button>Check out</button>
      </form> */}

      {/* <Button color="black" floated="right" onClick={sayHello}>
        Check out
      </Button> */}
      {/* </StripeCheckout> */}
    </Segment>
  </div>
)
