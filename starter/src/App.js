import './App.css';
import { useState, useEffect } from 'react';
import ListBooks from './components/ListBooks';
import SearchBook from './components/SearchBook';
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const handelUpdate = async (book, event) => {
    BooksAPI.update(book, event.target.value);
    if (books.includes(book)) {
      setBooks(
        books.map((el) =>
          el.title === book.title ? { ...el, shelf: event.target.value } : el
        )
      );
    } else {
      setBooks(books.concat({ ...book, shelf: event.target.value }));
    }
  };

  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks
              books={books}
              onUpdateBook={handelUpdate}
              onSearch={false}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={<SearchBook books={books} onUpdateBook={handelUpdate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
