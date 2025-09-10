
import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ensureAuth } from './auth';
import Navbar from './components/Navbar.jsx';
import PostNew from './routes/PostNew.jsx';
import FindQuestions from './routes/FindQuestions.jsx';

export const UserContext = createContext(null);


export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => ensureAuth(setUser), []);

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/questions" replace />} />
        <Route path="/questions" element={<FindQuestions />} />
        <Route path="/post/new" element={<PostNew />} />
      </Routes>
    </UserContext.Provider>
  );
}

