import React from 'react';

function Book({ title, author, description, date }) {
  return (
    <div className="book">
      <h2>{title}</h2>
      <h3>Author: {author}</h3>
      <p>Description: {description}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default Book;
