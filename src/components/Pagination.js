import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage - 1 === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/page-${(currentPage - 1).toString()}`;
  const nextPage = `/page-${(currentPage + 1).toString()}`;

  return (
    <section className="pagination">
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={i === 0 ? "/" : `/page-${i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </section>
  );
};

export default Pagination;
