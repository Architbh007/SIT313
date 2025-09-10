import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

export default function FiltersBar({ search, setSearch, tag, setTag, start, setStart, end, setEnd, clear }) {
  return (
    <Segment raised>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            icon="search"
            label="Search Title"
            placeholder="e.g., Firebase"
            value={search}
            onChange={(_,v)=>setSearch(v.value)}
          />
          <Form.Input
            icon="tag"
            label="Tag"
            placeholder="e.g., react"
            value={tag}
            onChange={(_,v)=>setTag(v.value)}
          />
          <Form.Input type="date" label="From" value={start} onChange={(_,v)=>setStart(v.value)} />
          <Form.Input type="date" label="To"   value={end}   onChange={(_,v)=>setEnd(v.value)} />
        </Form.Group>
        <Button basic icon="erase" content="Clear" type="button" onClick={clear} />
      </Form>
    </Segment>
  );
}
