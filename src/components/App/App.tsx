import React, { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Routers from "../../utils/Routes";
import BookFetcher from "../BookFetcher/BookFetcher";
import PaginationComponent from "../Pagination/Pagination";
import News from '../News/News';
import styles from './App.module.scss';


const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 12;

  // Обработка изменения страницы
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.App}>
      <Header />
      <BookFetcher currentPage={currentPage} booksPerPage={booksPerPage} />
      <Main/>
      <PaginationComponent 
        currentPage={currentPage} 
        totalPages={100} 
        onPageChange={handlePageChange} 
      />
      <News/>
      <Footer />
      <Routers/>
    </div>
  );
}

export default App;
3