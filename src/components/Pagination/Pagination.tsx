import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './Pagination.module.scss'

interface PaginationComponentProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination className={styles.pagination} 
      count={totalPages}
      page={currentPage} 
      onChange={onPageChange} 
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
          sx={{
            '&.Mui-selected': {
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              color: 'black',
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        />
      )}
    />
  );
};

export default PaginationComponent;
