import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default function Analytics() {
  return (
    <Segment>
      <Header as="h2">Analytics Dashboard (Premium)</Header>
      <p>Posts: 30 | Likes: 48 | Comments: 6</p>
      <p>More charts coming soon...</p>
    </Segment>
  );
}
