import ReactPaginate from "react-paginate";
import { IPagination } from "./IPagination";

const Pagination = ({ handlePageClick, pageCount }: IPagination) => {
  return (
    <ReactPaginate
      containerClassName="paginate"
      activeLinkClassName="active-link"
      breakLabel="..."
      nextLabel={"next"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={"previous"}
    />
  );
};

export default Pagination;
