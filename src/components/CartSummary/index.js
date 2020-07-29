/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import {Segment, Divider} from 'semantic-ui-react'

export default ({
  display_price: {
    with_tax: {formatted},
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
        {` ${formatted}`}
      </span>
    </Segment>

    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // onSubmit={this.handleSubmit}
    >
      <input type="hidden" name="contact" value="file-upload" />
    </form>
  </div>
)
