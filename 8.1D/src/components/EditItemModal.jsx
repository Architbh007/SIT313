import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';

export default function EditItemModal({ open, item, onSave, onClose }) {
  if (!item) return null;
  const isArticle = item.type === 'article';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); // question
  const [details, setDetails] = useState('');         // question
  const [abstract, setAbstract] = useState('');       // article
  const [content, setContent] = useState('');         // article
  const [tags, setTags] = useState('');               // comma-separated

  useEffect(() => {
    if (!item) return;
    setTitle(item.title || '');
    setDescription(item.description || '');
    setDetails(item.details || '');
    setAbstract(item.abstract || '');
    setContent(item.content || '');
    setTags((item.tags || []).join(', '));
  }, [item]);

  const submit = () => {
    const payload = isArticle
      ? { title: title.trim(), abstract: abstract.trim(), content: content.trim(), tags }
      : { title: title.trim(), description: description.trim(), details: details.trim(), tags };
    onSave(payload);
  };

  return (
    <Modal open={open} size="small" onClose={onClose} closeIcon>
      <Modal.Header>Edit {isArticle ? 'Article' : 'Question'}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input label="Title" value={title} onChange={(_,v)=>setTitle(v.value)} required />
          {isArticle ? (
            <>
              <Form.Input label="Abstract" value={abstract} onChange={(_,v)=>setAbstract(v.value)} />
              <Form.TextArea label="Content" rows={8} value={content} onChange={(_,v)=>setContent(v.value)} />
            </>
          ) : (
            <>
              <Form.Input label="Short Description" value={description} onChange={(_,v)=>setDescription(v.value)} />
              <Form.TextArea label="Details" rows={8} value={details} onChange={(_,v)=>setDetails(v.value)} />
            </>
          )}
          <Form.Input label="Tags (comma separated)" value={tags} onChange={(_,v)=>setTags(v.value)} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={submit}>Save</Button>
      </Modal.Actions>
    </Modal>
  );
}
