import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGenre, IUserData } from "../interfaces/interfaces";
import Badge from "../components/badge/Badge";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";

// STUB: url to badges list
// we can change api key or leave as is
// https://api.themoviedb.org/3/genre/movie/list?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US

// TODO: stopped here
// fetch movies list when badge is clicked

const Movies = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IUserData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 20;

  // STUB: fetch genre list
  useEffect(() => {
    const getGenreList = async () => {
      let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`;

      try {
        const response = await axios.get(url);
        let results = response.data?.genres;
        setGenres(results);
      } catch (error) {
        console.error(error);
      }
    };
    getGenreList();
  }, []);

  // STUB: fetch movie data
  // useEffect(() => {
  //   const getMovies = async () => {
  //     let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&page=${pageNumber}`;

  //     try {
  //       const response = await axios.get(url);
  //       let results = response.data?.results;
  //       let totalPages = response.data?.total_pages;
  //       setMovies(results);
  //       setPageCount(totalPages);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getMovies();
  // }, [pageNumber]);

  // STUB: change movies when badge is clicked

  // STUB: change page when paginate button is clicked
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pageCount;
    setPageNumber(event.selected + 1);
    setItemOffset(newOffset);
  };

  // STUB: navigate to moviedetails when clicked
  const handleNavigate = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <main className="movies container">
      <section className="badge-wrapper">
        {genres.map((genre) => {
          return <Badge key={genre.id} {...genre} />;
        })}
      </section>
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

export default Movies;
