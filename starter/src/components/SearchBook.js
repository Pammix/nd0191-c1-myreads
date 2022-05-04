import '../App.css';
import ListBooks from './ListBooks';
import { useState } from 'react';
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
        if (Array.isArray(r)) {
          const map1 = new Map();
          books.map((b) => map1.set(b.title, b.shelf));
          r.map(
            (el) =>
              (el.shelf =
                map1.get(el.title) !== undefined ? map1.get(el.title) : 'none')
          );
          setQueryBooks(r);
        } else {
          setQueryBooks([]);
        }
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
      {console.log(queryBooks)}
      <ListBooks
        books={queryBooks}
        onSearch={true}
        onUpdateBook={onUpdateBook}
      />
    </div>
  );
};

export default SearchBook;
