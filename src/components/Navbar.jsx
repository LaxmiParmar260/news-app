import React, { useContext, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsAction";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [topic, setTopic] = useState("");

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getNews(topic);
  };

  return (
    <nav
      className={
        dark
          ? "navbar navbar-expand-lg bg-dark shadow-lg fixed-top p-3"
          : "navbar navbar-expand-lg bg-light shadow-lg fixed-top p-3"
      }
    >
      <div className="container-fluid">
        <Link
          className={dark ? "navbar-brand text-light" : "navbar-brand"}
          to="/"
          onClick={() => getNews("India")}
        >
          Kal-Tak
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                to="/sports"
                onClick={() => getNews("Indian Sports")}
              >
                Sports
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                to="/entertainment"
                onClick={() => getNews("Indian Entertainment")}
              >
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                to="/politics"
                onClick={() => getNews("Indian Politics")}
              >
                Politics
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                to="/business"
                onClick={() => getNews("Indian Business")}
              >
                Business
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                to="/international"
                onClick={() => getNews("International")}
              >
                International
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control  rounded-0 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            />
            <button className="btn btn-info rounded-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
