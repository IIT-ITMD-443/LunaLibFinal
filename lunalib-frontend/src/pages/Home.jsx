import React from "react";
import books from "../data/books.json";
import BookCard from "../components/BookCard";
import SectionHeader from "../components/SectionHeader";

function filterStatus(status) {
  return books.filter(b => b.status === status);
}

function Home() {
  const inProgress = filterStatus("in-progress");
  const unread = filterStatus("unread");
  const completed = filterStatus("completed");
  const wishlist = filterStatus("wishlist");

  return (
    <div className="home-page">

      <section className="home-section">
        <SectionHeader title="In Progress" count={inProgress.length} />
        <div className="books-row">
          {inProgress.slice(0, 7).map(b => (
            <BookCard key={b.id} title={b.title} author={b.author} cover={b.cover} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader title="Unread" count={unread.length} />
        <div className="books-row">
          {unread.slice(0, 7).map(b => (
            <BookCard key={b.id} title={b.title} author={b.author} cover={b.cover} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader title="Completed" count={completed.length} />
        <div className="books-row">
          {completed.slice(0, 7).map(b => (
            <BookCard key={b.id} title={b.title} author={b.author} cover={b.cover} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader title="Wishlist" count={wishlist.length} />
        <div className="books-row">
          {wishlist.slice(0, 7).map(b => (
            <BookCard key={b.id} title={b.title} author={b.author} cover={b.cover} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
