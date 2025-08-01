import React from 'react';
import { Segment, Grid, List, Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <Segment inverted color="teal" style={{ padding: '4rem 2rem' }}>
      <Grid columns={3} divided stackable>
        <Grid.Row>
          <Grid.Column>
            <h4>Explore</h4>
            <List link inverted>
              <List.Item as="a">Home</List.Item>
              <List.Item as="a">Questions</List.Item>
              <List.Item as="a">Articles</List.Item>
              <List.Item as="a">Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>Support</h4>
            <List link inverted>
              <List.Item as="a">FAQs</List.Item>
              <List.Item as="a">Help</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>Stay connected</h4>
            <List horizontal>
              <List.Item as="a"><Icon name="facebook" /></List.Item>
              <List.Item as="a"><Icon name="instagram" /></List.Item>
              <List.Item as="a"><Icon name="twitter" /></List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#ccc' }}>
        <p>DEV@Deakin 2022</p>
        <p style={{ fontSize: '0.9rem' }}>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </Segment>
  );
}

export default Footer;
