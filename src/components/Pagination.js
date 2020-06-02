import React from "react";
import LineIcon from "react-lineicons";

function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  className
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={className ? "mi-pagination " + className : "mi-pagination"}>
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage - 1)} href="!#">
              <LineIcon name="chevron-left" />
            </a>
          </li>
        )}
        {pageNumbers.map(number => (
          <li
            key={number}
            className={currentPage === number ? "is-active" : null}
          >
            <a onClick={e => paginate(e, number)} href="!#">
              {number}
            </a>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage + 1)} href="!#">
              <LineIcon name="chevron-right" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
