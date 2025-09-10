import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Container, Header, Card, Placeholder, Segment } from 'semantic-ui-react';
import { db } from '../firebase';
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { UserContext } from '../app';
import FiltersBar from '../components/FiltersBar.jsx';
import FeedCard from '../components/FeedCard.jsx';
import EditItemModal from '../components/EditItemModal.jsx';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { msFromDateInput } from '../utils';

export default function FindQuestions() {
  const user = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [articles,  setArticles]  = useState([]);
  const [loading,   setLoading]   = useState(true);

  const [search, setSearch] = useState('');
  const [tag,    setTag]    = useState('');
  const [start,  setStart]  = useState('');
  const [end,    setEnd]    = useState('');

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const unsubQ = onSnapshot(collection(db, 'questions'), (snap) => {
      setQuestions(snap.docs.map(d => {
        const x = d.data();
        return { type:'question', id:d.id, title:x.title||'', description:x.description||'', details:x.details||'',
                 tags:x.tags||[], createdAt:(x.createdAt?.toDate?.()||new Date()).getTime(),
                 position:x.position ?? Number.MAX_SAFE_INTEGER, authorId:x.authorId||'' };
      }));
      setLoading(false);
    });

    const unsubP = onSnapshot(collection(db, 'posts'), (snap) => {
      setArticles(snap.docs.map(d => {
        const x = d.data();
        return { type:'article', id:d.id, title:x.title||'', abstract:x.abstract||'', content:x.content||'',
                 tags:x.tags||[], imageUrl:x.imageUrl||'', createdAt:(x.createdAt?.toDate?.()||new Date()).getTime(),
                 position:x.position ?? Number.MAX_SAFE_INTEGER, authorId:x.authorId||'' };
      }));
      setLoading(false);
    });

    return () => { unsubQ(); unsubP(); };
  }, []);

  const clear = () => { setSearch(''); setTag(''); setStart(''); setEnd(''); };

  const merged = useMemo(() => {
    const all = [...questions, ...articles];
    all.sort((a,b) => (a.position - b.position) || (b.createdAt - a.createdAt));
    return all;
  }, [questions, articles]);

  const filtered = useMemo(() => {
    const s = msFromDateInput(start); const e = msFromDateInput(end);
    return merged.filter(it => {
      const text = it.title.toLowerCase().includes(search.toLowerCase());
      const tOk  = !tag || (it.tags || []).map(x=>x.toLowerCase()).includes(tag.toLowerCase());
      const after = !s || it.createdAt >= s;
      const before= !e || it.createdAt <= e;
      return text && tOk && after && before;
    });
  }, [merged, search, tag, start, end]);

  const handleDelete = async (item) => {
    const col = item.type === 'article' ? 'posts' : 'questions';
    await deleteDoc(doc(db, col, item.id));
  };

  const handleSaveEdit = async (data) => {
    if (!editing) return;
    const col = editing.type === 'article' ? 'posts' : 'questions';
    const payload = editing.type === 'article'
      ? { title:data.title, abstract:data.abstract, content:data.content, tags:(data.tags||'').split(',').map(t=>t.trim()).filter(Boolean) }
      : { title:data.title, description:data.description, details:data.details, tags:(data.tags||'').split(',').map(t=>t.trim()).filter(Boolean) };
    await updateDoc(doc(db, col, editing.id), payload);
    setEditing(null);
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const src = result.source.index, dst = result.destination.index;
    if (src === dst) return;
    const reordered = Array.from(filtered);
    const [moved] = reordered.splice(src, 1);
    reordered.splice(dst, 0, moved);
    await Promise.all(reordered.map((it, idx) =>
      updateDoc(doc(db, it.type === 'article' ? 'posts' : 'questions', it.id), { position: idx })
    ));
  };

  return (
    <Container className="page">
      <Header as="h2" icon="help circle" content="Find Question" subheader="Browse questions and articles" />

      <FiltersBar
        search={search} setSearch={setSearch}
        tag={tag} setTag={setTag}
        start={start} setStart={setStart}
        end={end} setEnd={setEnd}
        clear={clear}
      />

      {loading && (
        <Segment raised>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="medium" />
              <Placeholder.Line length="long" />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      )}

      {!loading && filtered.length === 0 && <Segment raised> No results. </Segment>}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="feed">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Card.Group stackable doubling itemsPerRow={1}>
                {filtered.map((item, idx) => (
                  <Draggable draggableId={`${item.type}:${item.id}`} index={idx} key={`${item.type}:${item.id}`}>
                    {(drag) => (
                      <div ref={drag.innerRef} {...drag.draggableProps} {...drag.dragHandleProps}>
                        <FeedCard
                          item={item}
                          onDelete={handleDelete}
                          onEdit={setEditing}
                          onTagClick={(t) => setTag(t)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </Card.Group>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <EditItemModal open={!!editing} item={editing} onSave={handleSaveEdit} onClose={() => setEditing(null)} />
    </Container>
  );
}
