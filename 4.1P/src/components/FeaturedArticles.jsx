import React from 'react';
import { Card, Image, Button, Header } from 'semantic-ui-react';
import articles from '../data/articles';

function FeaturedArticles() {
  return (
    <div style={{ padding: '2rem' }}>
      <Header as="h2" textAlign="center">Featured Articles</Header>

      <Card.Group itemsPerRow={3}>
        {articles.map((article) => (
          <Card key={article.id}>
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>{article.author}</Card.Content>
          </Card>
        ))}
      </Card.Group>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button>See all articles</Button>
      </div>
    </div>
  );
}

export default FeaturedArticles;
