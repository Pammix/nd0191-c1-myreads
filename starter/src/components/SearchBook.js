import '../App.css';
import ListBooks from './ListBooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBook = ({ books, onUpdateBook }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const showingBooks =
    query === ''
      ? books
      : books.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <ListBooks
        books={showingBooks}
        onSearch={true}
        onUpdateBook={onUpdateBook}
      />
    </div>
  );
};

export default SearchBook;
