import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ICastInfo, IMovieInfo } from "../interfaces/interfaces";
import noImageFound from "../assets/images/no-image-found.webp";
import IconButton from "../components/button/IconButton";
import ImageText from "../components/text-image/ImageText";
import Modal from "../components/modal/Modal";

const MovieDetails = () => {
  const { id } = useParams();
  let location = useLocation();
  console.log(location);

  const [movieInfo, setMovieInfo] = useState<IMovieInfo>();
  const [castInfo, setCastInfo] = useState<ICastInfo[]>([]);
  const [trailerInfo, setTrailerInfo] = useState<string>();
  const [isModal, setIsModal] = useState(false);

  // STUB: fetch movie, cast & trailer info
  useEffect(() => {
    const getMovieInfo = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`;

      try {
        const response = await axios.get(url);
        let results = response.data;
        setMovieInfo(results);
      } catch (error) {
        console.error(error);
      }
    };

    const getCastInfo = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`;

      try {
        const response = await axios.get(url);
        let results = response.data.cast;
        setCastInfo(results);
      } catch (error) {
        console.error(error);
      }
    };

    const getTrailerInfo = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`;

      try {
        const response = await axios.get(url);
        let results = response.data.results[0]["key"];
        setTrailerInfo(results);
      } catch (error) {
        console.error(error);
      }
    };

    getTrailerInfo();
    getMovieInfo();
    getCastInfo();
  }, [id]);

  // STUB: toggle background scrolling depending on modal state
  // or change in location
  useEffect(() => {
    isModal && (document.body.style.overflow = "hidden");
    (!isModal || location.pathname !== `${id}`) &&
      (document.body.style.overflow = "unset");
  }, [isModal, location.pathname]);

  // STUB: toggle modal open or close
  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  // STUB: parse image src
  let imageUrl = `https://image.tmdb.org/t/p/w500/${movieInfo?.backdrop_path}`;

  return (
    <main className="movie-info container">
      <section className="movie-info-summary">
        <div className="image-wrapper">
          <img
            src={
              movieInfo?.backdrop_path === undefined ? noImageFound : imageUrl
            }
            alt={
              movieInfo?.backdrop_path === undefined
                ? "not found"
                : movieInfo?.title
            }
            loading="lazy"
          />
        </div>
        <div className="text-wrapper">
          <h3>{movieInfo?.title}</h3>
          <p>{movieInfo?.overview}</p>
          <p>Release Date: {movieInfo?.release_date}</p>
          <IconButton openModal={openModal} />
        </div>
      </section>
      <section className="cast-wrapper">
        <h2>Cast</h2>
        <div className="cast-list">
          {castInfo.map((cast) => {
            return <ImageText key={cast.id} {...cast} />;
          })}
        </div>
      </section>
      <Modal
        isModal={isModal}
        closeModal={closeModal}
        title={movieInfo?.title}
        urlParam={trailerInfo}
      />
    </main>
  );
};

export default MovieDetails;
