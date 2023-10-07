import React from "react";
import "./styles.css";

const TablePagination = ({ currentPage, nPages, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination_buttons">
      <button
        className="bg-light"
        disabled={currentPage === 1 ? true : false}
        style={{
          backgroundColor: "5D9CEC",
          padding: "3px 10px",
          border: "none",
        }}
        onClick={goToPrevPage}
      >
        Previous
      </button>
      {pageNumbers.map((pgNumber) => (
        <button
          className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          key={pgNumber}
          style={{
            backgroundColor: "rgb(35, 183, 229)",
            padding: "3px 10px",
            border: "none",
          }}
          onClick={() => setCurrentPage(pgNumber)}
        >
          {pgNumber}
        </button>
      ))}
      <button
        className="bg-light"
        disabled={currentPage === nPages ? true : false}
        style={{
          backgroundColor: "5D9CEC",
          padding: "3px 10px",
          border: "none",
        }}
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
