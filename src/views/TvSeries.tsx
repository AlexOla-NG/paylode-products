import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGenre, IUserData } from "../interfaces/interfaces";
import Badge from "../components/badge/Badge";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";

const TvSeries = () => {
  const navigate = useNavigate();

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [tvSeries, setTVSeries] = useState<IUserData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [badgeID, setBadgeID] = useState<number>();

  // STUB: fetch genre list
  useEffect(() => {
    const getGenreList = async () => {
      let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`;

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

  // STUB: get tv series on initial render
  useEffect(() => {
    const getTVSeries = async () => {
      let url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&page=${pageNumber}`;

      try {
        const response = await axios.get(url);
        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setTVSeries(results);

        // STUB: this is a sanity check because
        // page number > 500 throws error from server
        totalPages >= 500 ? setPageCount(500) : setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    // STUB: get tv series on initial render only if badgeID is undefined
    if (badgeID === undefined) getTVSeries();
  }, [pageNumber]);

  // STUB: set new tvSeries state when badge or page number is clicked
  useEffect(() => {
    const getNewTVSeries = async () => {
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${badgeID}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

      try {
        const response = await axios.get(url);
        let results = response.data?.results;
        let totalPages = response.data?.total_pages;
        setTVSeries(results);

        // STUB: this is a sanity check because
        // page number > 500 throws error from server
        totalPages >= 500 ? setPageCount(500) : setPageCount(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    // STUB: if badgeID is not null/undefined, get new movies
    if (badgeID) getNewTVSeries();
  }, [badgeID, pageNumber]);

  // STUB: change movies when badge is clicked
  const toggleGenre = (id: number) => {
    setBadgeID(id);
  };

  // STUB: change page when paginate button is clicked
  const handlePageClick = (event: any) => {
    setPageNumber(event.selected + 1);
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
        {tvSeries.map((series) => {
          return (
            <Card key={series.id} handleNavigate={handleNavigate} {...series} />
          );
        })}
      </section>
      <section className="paginate-wrapper">
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </section>
    </main>
  );
};

export default TvSeries;
