import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import styles from "./Pagination.module.css";
const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={styles.paginationContainer}>
      <li onClick={onPrevious} className={currentPage === 1 ? `${styles.disabledLi}` : ""}>
        Previous
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>;
        }

        return <li onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>;
      })}

      <li onClick={onNext} className={currentPage === lastPage ? `${styles.disabledLi}` : ""}>
        Next
      </li>
    </ul>
  );
};

export default Pagination;
