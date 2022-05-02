import './App.css';
import { useState, useEffect } from 'react';

import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI';

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
    const res = BooksAPI.update(book, event.target.value);

    setBooks(
      books.map((el) =>
        el.title === book.title ? { ...el, shelf: event.target.value } : el
      )
    );
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {console.log(books)}
        <ListBooks books={books} onUpdateBook={handelUpdate} />
      </div>
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  );
}

export default App;
