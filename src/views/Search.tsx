import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../interfaces/interfaces";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import Searchbar from "../components/search/Searchbar";

const Search = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>();
  const [movies, setMovies] = useState<IUserData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 20;

  // STUB: fetch data
  useEffect(() => {
    const getSearchQuery = async () => {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`;

      try {
        const response = await axios.get(url);
        // console.log(response);

        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setMovies(results);
        setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchTerm) getSearchQuery();
  }, [searchTerm, pageNumber]);

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

  const getSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <main className="search container">
      <section className="search-wrapper">
        <Searchbar getSearchTerm={getSearchTerm} />
      </section>
      <section className="card-wrapper">
        {movies.map((movie) => {
          return (
            <Card key={movie.id} handleNavigate={handleNavigate} {...movie} />
          );
        })}
      </section>
      {movies.length > 0 && (
        <section className="paginate-wrapper">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </section>
      )}
    </main>
  );
};

export default Search;
