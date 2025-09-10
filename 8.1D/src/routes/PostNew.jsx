import React, { useContext, useMemo, useState } from 'react';
import {
  Container,
  Header,
  Form,
  Button,
  Segment,
  Divider,
  Icon,
} from 'semantic-ui-react';
import ImageUploader from '../components/ImageUploader.jsx';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { UserContext } from '../app';
import { useNavigate } from 'react-router-dom';
import { parseTags } from '../utils';

export default function PostNew() {
  const user = useContext(UserContext);
  const nav = useNavigate();

  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');

  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false); // track upload state

  const canSubmit = useMemo(() => {
    if (!title.trim()) return false;
    return postType === 'question' ? !!description.trim() : !!content.trim();
  }, [title, description, content, postType]);

  const submit = async () => {
    if (!user || !canSubmit || uploading) return;

    if (postType === 'question') {
      await addDoc(collection(db, 'questions'), {
        title: title.trim(),
        description: description.trim(),
        details: details.trim(),
        tags: parseTags(tags),
        createdAt: serverTimestamp(),
        authorId: user.uid,
        position: Date.now(),
      });
    } else {
      await addDoc(collection(db, 'posts'), {
        title: title.trim(),
        abstract: abstract.trim(),
        content: content.trim(),
        tags: parseTags(tags),
        imageUrl: imageUrl || null,
        type: 'article',
        createdAt: serverTimestamp(),
        authorId: user.uid,
        position: Date.now(),
      });
    }
    nav('/questions');
  };

  return (
    <Container className="page">
      <Header as="h2" icon="edit outline" content="New Post" />

      <Segment raised>
        <Header as="h4" content="Select Post Type" />
        <Button.Group>
          <Button
            toggle
            active={postType === 'question'}
            onClick={() => setPostType('question')}
          >
            <Icon name="help circle" /> Question
          </Button>
          <Button
            toggle
            active={postType === 'article'}
            onClick={() => setPostType('article')}
          >
            <Icon name="file alternate" /> Article
          </Button>
        </Button.Group>
      </Segment>

      <Segment raised>
        <Form>
          <Form.Input
            label="Title"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(_, v) => setTitle(v.value)}
            required
          />

          {postType === 'article' && (
            <>
              <Header as="h4" icon="image" content="Add an image" />
              <ImageUploader
                onUploaded={setImageUrl}
                onUploadStateChange={setUploading}
              />
              <Divider />
            </>
          )}

          {postType === 'question' ? (
            <>
              <Form.Input
                label="Short Description"
                placeholder="One or two lines"
                value={description}
                onChange={(_, v) => setDescription(v.value)}
              />
              <Form.TextArea
                label="Details"
                rows={8}
                value={details}
                onChange={(_, v) => setDetails(v.value)}
              />
            </>
          ) : (
            <>
              <Form.TextArea
                label="Abstract"
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(_, v) => setAbstract(v.value)}
              />
              <Form.TextArea
                label="Article text"
                rows={10}
                value={content}
                onChange={(_, v) => setContent(v.value)}
              />
            </>
          )}

          <Form.Input
            label="Tags"
            placeholder="e.g., react, firebase"
            value={tags}
            onChange={(_, v) => setTags(v.value)}
          />

          <Button
            primary
            icon
            labelPosition="right"
            onClick={submit}
            disabled={!canSubmit || uploading}
          >
            {uploading ? 'Uploading...' : 'Post'}
            <Icon name="send" />
          </Button>
        </Form>
      </Segment>
    </Container>
  );
}
