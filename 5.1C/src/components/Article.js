import React, { useState } from 'react';
import { Form, Input, TextArea, Button, Segment, Header } from 'semantic-ui-react';

function Article() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  return (
    <Segment>
      <Header as="h3">What do you want to ask or share</Header>
      

      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Abstract</label>
          <TextArea
            placeholder="Enter a abstract paragraph"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            style={{ minHeight: 80 }}
          />
        </Form.Field>

        <Form.Field>
          <label>Article Text</label>
          <TextArea
            placeholder="Enter a abstract paragraph"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ minHeight: 120 }}
          />
        </Form.Field>

        <Form.Field>
          <label>Tags</label>
          <Input
            placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Field>

        <Button color="grey">Post</Button>
      </Form>
    </Segment>
  );
}

export default Article;
