import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import { IUserData } from "../interfaces/interfaces";

// NOTE: when we are refactoring, replace useState with useReducer
// add react skeleton to card depending on isLoading state

const Trendings = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IUserData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 20;

  // STUB: fetch data
  useEffect(() => {
    const getTrendings = async () => {
      let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&page=${pageNumber}`;

      try {
        const response = await axios.get(url);
        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setMovies(results);
        setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendings();
  }, [pageNumber]);

  // STUB: change page when paginate button is clicked
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pageCount;
    setPageNumber(event.selected + 1);
    setItemOffset(newOffset);
  };

  // STUB: navigate to moviedetails when clicked
  const handleNavigate = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <main className="trendings container">
      <section className="card-wrapper">
        {movies.map((movie) => {
          return (
            <Card key={movie.id} handleNavigate={handleNavigate} {...movie} />
          );
        })}
      </section>
      <section className="paginate-wrapper">
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </section>
    </main>
  );
};

export default Trendings;
