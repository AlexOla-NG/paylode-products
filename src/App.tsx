import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Loading from "./components/shared/Loading";
import Navbar from "./components/navigation/Navbar";

const Trendings = lazy(() => import("./views/Trendings"));
const Movies = lazy(() => import("./views/Movies"));
const MovieDetails = lazy(() => import("./views/MovieDetails"));
const TvSeries = lazy(() => import("./views/TvSeries"));
const Search = lazy(() => import("./views/Search"));

// TODO: add skeleton as fallback for navbar

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Trendings />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":id" element={<MovieDetails />} />
          <Route path="tv-series" element={<TvSeries />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
