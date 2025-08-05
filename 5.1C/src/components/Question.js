import React, { useState } from 'react';
import { Form, Input, TextArea, Button, Segment, Header } from 'semantic-ui-react';

function Question() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <Segment>
      <Header as="h3">What do you want to ask or share</Header>
      

      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder="Start your question with how, what, why, etc."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Describe your problem</label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ minHeight: 120 }}
          />
        </Form.Field>

        <Form.Field>
          <label>Tags</label>
          <Input
            placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Field>

        <Button color="grey">Post</Button>
      </Form>
    </Segment>
  );
}

export default Question;
