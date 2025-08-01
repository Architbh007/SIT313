import React from 'react';
import { Card, Image, Button, Header } from 'semantic-ui-react';
import tutorials from '../data/tutorials';

function FeaturedTutorials() {
  return (
    <div style={{ padding: '2rem' }}>
      <Header as="h2" textAlign="center">Featured Tutorials</Header>

      <Card.Group itemsPerRow={3}>
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id}>
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>{tutorial.author}</Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button>See all tutorials</Button>
      </div>
    </div>
  );
}

export default FeaturedTutorials;
