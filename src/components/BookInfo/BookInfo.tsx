import React from 'react';
import styles from './BookInfo.module.scss';
import InfoComponent from './moreInfo/moreInfo';

interface BookInfoProps {
  book: {
    title: string;
    image: string;
    price: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    year?: string;
    desc?: string;
  } | null;
}

const BookInfo: React.FC<BookInfoProps> = ({ book }) => {
  if (!book) return <p>Книга не найдена</p>;

  return (
    <div className={styles.bookInfoWrapper}>
      <h2 className={styles.bookTitle}>{book.title}</h2>
      <div className={styles.bookDetails}>
        <div className={styles.imgWrapper}>
          <img className={styles.bookImg} src={book.image} alt={book.title} />
        </div>
        <div className={styles.bookDetailsText}>
        <p className={styles.bookPrice}>{book.price}</p>
        <p className={styles.bookInfo}>Authors: <span>{book.authors}</span></p>
        <p className={styles.bookInfo}>Publisher: <span>{book.publisher}</span></p>
        <p className={styles.bookInfo}>Language: <span>English</span></p>
        <button className={styles.cartButton}>ADD TO CART</button>
        </div>
        
      </div>
     
      <InfoComponent/>
      
      
      
      
      
    </div>
  );
};

export default BookInfo;
