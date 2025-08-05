import React from 'react';
import { Button } from 'semantic-ui-react';

function Post({ setPostType }) {
  return (
    <div>
      <Button color="blue" onClick={() => setPostType('question')}>Question</Button>
      <Button color="green" onClick={() => setPostType('article')}>Article</Button>
    </div>
  );
}

export default Post;
