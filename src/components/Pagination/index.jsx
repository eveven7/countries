import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ListCard from '../ListCard';
import { usePagination, DOTS } from '../usePagination';

const Pagination = ({data, itemsPerPage, totalCount}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const siblingCount = 1;
  const totalPageCount = Math.ceil(totalCount / itemsPerPage);
  const [paginationRange ]= usePagination({
    currentPage,
    totalPageCount,
    siblingCount,
    itemsPerPage
  });


  const PaginationButton = ({className, text, onClick}) => {
    return (
      <button
        onClick={onClick}
        className={className}
      >
        <span>{text}</span>
      </button>
    );
  };
  
  
  PaginationButton.defaultProps ={
    onClick: ()=>{}
  };
  PaginationButton.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([ PropTypes.string,PropTypes.number,]).isRequired,
    onClick: PropTypes.func
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [totalCount]);

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
 
  return (
    <div>
      <div className="Container">
        {getPaginatedData().map((itemData) => (
          <ListCard key={itemData.name} data={itemData} />
        ))}
      </div>
     
      <div className="Pagination">
        <PaginationButton
          onClick={onPreviousPage}
          className="Next"
          text='&#x3c;'
        />
        {paginationRange().map((pageNumber, index) => (
          (pageNumber === DOTS) ?
            <PaginationButton
              key={index}
              className="PaginationDots"
              text='&#8230;'
            />
            :
            <PaginationButton
              key={index}
              className="button button--primary button--sm"

              onClick={changePage}
              text ={pageNumber}
            />
        ))}
        <PaginationButton
          onClick={onNextPage}
          className="Next"
          

          text=' &#x3e;'
        />
      </div>
    </div>
  );
};

export default Pagination;
Pagination.defaultProps = {
};
Pagination.propTypes= {
  data: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired
};
