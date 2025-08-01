import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react';

function Newsletter() {
  return (
    <Segment inverted color="grey" style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Input placeholder="Enter your email" style={{ width: '300px', marginRight: '1rem' }} />
      <Button color="blue">Subscribe</Button>
    </Segment>
  );
}

export default Newsletter;
