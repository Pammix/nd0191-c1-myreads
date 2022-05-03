import '../App.css';
import ListBooks from './ListBooks';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

const SearchBook = ({ books, onUpdateBook }) => {
  const [query, setQuery] = useState('');

  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    if (query) {
      const searchBooks = async () => {
        const res = await BooksAPI.search(query, 100);
        let r = res === undefined ? [] : res;
        setQueryBooks(r);
      };
      searchBooks();
    } else {
      setQueryBooks([]);
    }
  };

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
        books={queryBooks}
        onSearch={true}
        onUpdateBook={onUpdateBook}
      />
    </div>
  );
};

export default SearchBook;
