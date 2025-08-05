import React, { useState } from 'react';
import Post from './components/Post';
import Question from './components/Question';
import Article from './components/Article';

function App() {
  const [postType, setPostType] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>New Post Page</h1>
      <p>Current post type: {postType}</p>
      <Post setPostType={setPostType} />
      {postType === 'question' && <Question />}
      {postType === 'article' && <Article />}
    </div>
  );
}

export default App;
