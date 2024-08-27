import React, { useState, useEffect } from 'react';
import BookInfo from '../BookInfo/BookInfo';
import styles from './BookFetcher.module.scss';

interface Book {
  isbn13: string;
  title: string;
  image: string;
  price: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  language?: string;
  isbn10?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  url?: string;
}

interface BookFetcherProps {
  currentPage: number;
  booksPerPage: number;
}

const BookFetcher: React.FC<BookFetcherProps> = ({ currentPage, booksPerPage }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      let fetchedBooks: Book[] = [];
      let page = 1;

      while (fetchedBooks.length < currentPage * booksPerPage) {
        try {
          const response = await fetch(`https://api.itbook.store/1.0/search/javascript/${page}`);
          const data = await response.json();
          fetchedBooks = [...fetchedBooks, ...data.books];
          page += 1;
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
          break;
        }
      }

      setBooks(fetchedBooks);
      setLoading(false);
    };

    fetchBooks();
  }, [currentPage, booksPerPage]);

  const fetchBookDetails = (isbn13: string) => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then(response => response.json())
      .then(data => setBookDetails(data))
      .catch(error => console.error('Ошибка при получении деталей книги:', error));
  };

  const handleBackToBooks = () => {
    setBookDetails(null);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  if (loading) {
    return <p>Загрузка книг...</p>;
  }

  return (
    <div className={styles.booksFetcherWrapper}>
      {bookDetails ? (
        <div>
          <button onClick={handleBackToBooks}>Назад к списку</button>
          <BookInfo book={bookDetails} />
        </div>
      ) : (
        <div>
          <h1>Список книг</h1>
          <div className={styles.books}>
            {currentBooks.map(book => (
              <div className={styles.bookWrapper} key={book.isbn13} onClick={() => fetchBookDetails(book.isbn13)}>
                <div className={styles.imgWrapper}>
                  <img className={styles.bookImg} src={book.image} alt={book.title} />
                </div>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.price}>{book.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookFetcher;








