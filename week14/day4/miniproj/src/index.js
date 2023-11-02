import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PostList from './PostList';
import UsersList from './UsersList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <PostList />
    <UsersList/>
  </>

);

// If you want to start measuring performance in your app, pass a function