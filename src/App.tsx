import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/shared/Loading";

const Home = lazy(() => import("./views/Home"));
const Trendings = lazy(() => import("./views/Trendings"));
const Movies = lazy(() => import("./views/Movies"));
const MovieDetails = lazy(() => import("./views/MovieDetails"));
const TvSeries = lazy(() => import("./views/TvSeries"));
const Search = lazy(() => import("./views/Search"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Trendings />} />
            <Route path="movies" element={<Movies />} />
            <Route path=":id" element={<MovieDetails />} />
            <Route path="tv-series" element={<TvSeries />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
