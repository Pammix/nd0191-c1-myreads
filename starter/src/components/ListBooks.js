import '../App.css';
import Book from '../components/Book';

const ListBooks = ({ books, onUpdateBook }) => {
  const handelUpdateBook = (book, event) => {
    onUpdateBook(book, event);
  };
  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === 'currentlyReading')
              .map((book) => (
                <li key={book.title}>
                  <Book
                    key={book.title}
                    book={book}
                    updateShelfBook={(e) => handelUpdateBook(book, e)}
                  />
                </li>
              ))}
          </ol>
        </div>
        <h2 className="bookshelf-title"> To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === 'wantToRead')
              .map((book) => (
                <li key={book.title}>
                  <Book
                    key={book.title}
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
                <li key={book.title}>
                  <Book
                    key={book.title}
                    book={book}
                    updateShelfBook={(e) => handelUpdateBook(book, e)}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
