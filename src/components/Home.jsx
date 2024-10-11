import React, { useContext, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Slider from "./Slider";
import NewsCard from "./NewsCard";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsAction";
import { SiPayloadcms } from "react-icons/si";
import { toast } from "react-toastify";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { newsData, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  // if(newsData.length === 0){
  //   toast.error("Kindly Search valid news!!")
  //  getNews("Indore")
  // }

  return (
    <div
      id="container"
      className={
        dark ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
      }
    >
      <div className="row g-3 my-3">
        <WeatherCard />
        <div className="col-sm-12 col-md-8">
          <Slider />
        </div>
      </div>

      <marquee>
        {" "}
        <h1 className="display-6 text-center my-2">read latest news</h1>
      </marquee>

      <h1 className="display-5 text-center">Top News</h1>

      <div className="row g-1 my-3">
        {!newsData ? (
          <h1 className="text-center display-4 ">Loading....</h1>
        ) : (
          newsData.map((news, index) => <NewsCard key={index} news={news} />)
        )}
      </div>
    </div>
  );
};

export default Home;
