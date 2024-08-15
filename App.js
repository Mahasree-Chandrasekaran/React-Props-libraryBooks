// src/App.js
import React from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>My Book Library</h1>
      <BookList />
    </div>
  );
}

export default App;
