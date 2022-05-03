import '../App.css';
import Book from '../components/Book';
import { Link } from 'react-router-dom';

const ListBooks = ({ books, onUpdateBook, onSearch }) => {
  const handelUpdateBook = (book, event) => {
    onUpdateBook(book, event);
  };

  return (
    <div className="list-books-content">
      <div className="bookshelf">
        {!onSearch && (
          <div>
            <h2 className="bookshelf-title">Currently Reading </h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === 'currentlyReading')
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        key={book.id}
                        book={book}
                        updateShelfBook={(e) => handelUpdateBook(book, e)}
                      />
                    </li>
                  ))}
              </ol>
            </div>

            <h2 className="bookshelf-title"> Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === 'wantToRead')
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        key={book.id}
                        book={book}
                        updateShelfBook={(e) => handelUpdateBook(book, e)}
                      />
                    </li>
                  ))}
              </ol>
            </div>
            <h2 className="bookshelf-title"> Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === 'read')
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        key={book.id}
                        book={book}
                        updateShelfBook={(e) => handelUpdateBook(book, e)}
                      />
                    </li>
                  ))}
              </ol>
            </div>
            <div className="open-search">
              <Link to="/search" className="add-contact">
                Add Book
              </Link>
            </div>
          </div>
        )}
        {onSearch && (
          <div>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books?.map((book) => (
                  <li key={book.id}>
                    <Book
                      key={book.id}
                      book={book}
                      updateShelfBook={(e) => handelUpdateBook(book, e)}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListBooks;
