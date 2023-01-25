import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <ReactPaginate
      containerClassName="paginate"
      activeLinkClassName="active-link"
      breakLabel="..."
      nextLabel={"next"}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={71}
      previousLabel={"previous"}
    />
  );
};

export default Pagination;
