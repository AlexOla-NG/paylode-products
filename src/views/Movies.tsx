import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGenre, IUserData } from "../interfaces/interfaces";
import Badge from "../components/badge/Badge";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";

const Movies = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IUserData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [badgeID, setBadgeID] = useState<number>();
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

  // STUB: get movies on initial render
  useEffect(() => {
    let id: number;

    // STUB: if genres state has been populated, get movies
    // else if badgeID is not null/undefined, get movies
    if (genres.length > 0) id = genres[0]["id"];
    if (badgeID) id = badgeID;
    const getMovies = async () => {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${id}&with_watch_monetization_types=flatrate`;

      try {
        const response = await axios.get(url);
        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setMovies(results);

        // STUB: this is a sanity check because
        // page number > 500 throws error from server
        totalPages >= 500 ? setPageCount(500) : setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [pageNumber]);

  // STUB: change movies when badge is clicked
  useEffect(() => {
    const getNewMovies = async () => {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${badgeID}&with_watch_monetization_types=flatrate`;

      try {
        const response = await axios.get(url);
        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setMovies(results);

        // STUB: this is a sanity check because
        // page number > 500 throws error from server
        totalPages >= 500 ? setPageCount(500) : setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    // STUB: if badgeID is not null/undefined, get new movies
    if (badgeID) getNewMovies();
  }, [badgeID]);

  // STUB: change movies when badge is clicked
  const toggleGenre = (id: number) => {
    setBadgeID(id);
  };

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
    <main className="movies container">
      <section className="badge-wrapper">
        {genres.map((genre) => {
          return (
            <Badge key={genre.id} {...genre} handleBadgeClick={toggleGenre} />
          );
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
