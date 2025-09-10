import React, { useState, useContext } from 'react';
import { Card, Button, Label, Icon, Image } from 'semantic-ui-react';
import { formatDate } from '../utils';
import { UserContext } from '../app';

export default function FeedCard({ item, onDelete, onEdit }) {
  const [open, setOpen] = useState(false);
  const user = useContext(UserContext);
  const isArticle = item.type === 'article';

  return (
    <Card fluid onClick={() => setOpen(o => !o)}>
      {isArticle && item.imageUrl && (
        <Image
          src={item.imageUrl}
          size="small"
          centered
          bordered
          rounded
          style={{ objectFit: "cover", maxHeight: "180px" }}
        />
      )}

      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
          {formatDate(item.createdAt)}
          <Label color={isArticle ? 'teal' : 'violet'} size="mini" style={{ marginLeft: 8 }}>
            {isArticle ? 'Article' : 'Question'}
          </Label>
        </Card.Meta>
        <Card.Description>
          {isArticle
            ? (item.abstract || (item.content || '').slice(0, 160) + ((item.content || '').length > 160 ? '…' : ''))
            : item.description}
        </Card.Description>
        <div style={{ marginTop: 8 }}>
          {(item.tags || []).map(t => (
            <Label key={t} basic color="blue" style={{ marginRight: 6 }}>#{t}</Label>
          ))}
        </div>
      </Card.Content>

      {open && (
        <>
          <Card.Content>
            <strong>Details:</strong>
            <p style={{ marginTop: 6 }}>{isArticle ? item.content : item.details}</p>
           </Card.Content>
           <Card.Content extra onClick={(e)=>e.stopPropagation()}>
            <div style={{ display:'flex', gap:8, justifyContent:'flex-end' }}>
              <Button size="small" onClick={() => onEdit(item)} icon labelPosition="left">
                <Icon name="edit" /> Edit
              </Button>
              <Button size="small" negative onClick={() => onDelete(item)} icon labelPosition="left">
                <Icon name="trash" /> Delete
              </Button>
            </div>
          </Card.Content>
        </>
      )}
    </Card>
  );
}
