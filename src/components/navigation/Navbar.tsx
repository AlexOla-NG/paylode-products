import { NavLink } from "react-router-dom";
import { INavlinks } from "./INavlinks";
import { ReactComponent as TrendingIcon } from "../../assets/svg/trending-icon.svg";
import { ReactComponent as VideoIcon } from "../../assets/svg/video-icon.svg";
import { ReactComponent as TVSeriesIcon } from "../../assets/svg/tvSeries-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import IconText from "../text-image/IconText";

// TODO: fix transition when navbar-toggle is clicked

const navlinks: INavlinks[] = [
  {
    icon: <TrendingIcon />,
    text: "Trendings",
    link: "/",
  },
  {
    icon: <VideoIcon />,
    text: "Movies",
    link: "movies",
  },
  {
    icon: <TVSeriesIcon />,
    text: "TV Series",
    link: "tv-series",
  },
  {
    icon: <SearchIcon />,
    text: "Search",
    link: "search",
  },
];

const Navbar = () => {
  const handleToggle = () => {
    const navbarList = document.querySelector(".collapse") as HTMLDivElement;
    const navbar = document.querySelector("nav") as HTMLDivElement;

    navbar.classList.toggle("nav-big");
    navbar.classList.toggle("nav-small");

    setTimeout(() => {
      navbarList.classList.toggle("show");
    }, 100);
  };

  return (
    <nav className="nav-small">
      <div className="container">
        <NavLink to="/">MoviesHub</NavLink>

        <button className="navbar-toggle" onClick={handleToggle}>
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className="navbar-collapse collapse">
          <div className="navbar-items">
            {navlinks.map((navlink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navlink.link}
                  className={({ isActive }) =>
                    isActive ? "navbar-items-active" : ""
                  }
                  onClick={handleToggle}
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
