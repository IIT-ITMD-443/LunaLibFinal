import React from "react";

function BookCard({ title, author, cover }) {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />

      <div className="book-meta">
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
}

export default BookCard;
