// src/components/BookList.js
import React from 'react';
import Book from './Book';

function BookList() {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice in the Deep South.",
      date: "1960"
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel set in a totalitarian society.",
      date: "1949"
    },
    // Add more books here
  ];

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
          date={book.date}
        />
      ))}
    </div>
  );
}

export default BookList;
