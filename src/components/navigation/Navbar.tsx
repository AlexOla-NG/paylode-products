import { NavLink } from "react-router-dom";
import { INavlinks } from "./INavlinks";
import { ReactComponent as TrendingIcon } from "../../assets/svg/trending-icon.svg";
import { ReactComponent as VideoIcon } from "../../assets/svg/video-icon.svg";
import { ReactComponent as TVSeriesIcon } from "../../assets/svg/tvSeries-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import IconText from "../text-image/IconText";

// TODO: stopped here
// finish navbar layout

const navlinks: INavlinks[] = [
  {
    icon: <TrendingIcon />,
    text: "trendings",
    link: "/",
  },
  {
    icon: <VideoIcon />,
    text: "movies",
    link: "movies",
  },
  {
    icon: <TVSeriesIcon />,
    text: "tv series",
    link: "tv-series",
  },
  {
    icon: <SearchIcon />,
    text: "search",
    link: "search",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">MoviesHub</NavLink>

        <button className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className="navbar-collapse">
          <div className="navbar-items">
            {navlinks.map((navlink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navlink.link}
                  className={({ isActive }) =>
                    isActive ? "navbar-items-active" : ""
                  }
                >
                  <IconText {...navlink} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
