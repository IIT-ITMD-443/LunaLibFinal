import React, { useState } from "react";
import books from "../data/books.json";

import SearchBar from "../components/SearchBar";
import FiltersSidebar from "../components/FiltersSidebar";
import BookCard from "../components/BookCard";

function MyLibrary() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === "all" || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="library-page">

      <div className="library-left">
        <FiltersSidebar activeFilter={filter} onChange={setFilter} />
      </div>

      <div className="library-right">
        <SearchBar value={search} onChange={setSearch} />

        <div className="books-row">
          {filteredBooks.map(b => (
            <BookCard key={b.id} {...b} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default MyLibrary;
