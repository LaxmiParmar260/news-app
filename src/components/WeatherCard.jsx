import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import WeatherContext from "../providers/weather/WeatherContext";
import { toast } from "react-toastify";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weather, dispatch } = useContext(WeatherContext);

  const getWeather = async (city) => {
    try {
      //fetching API
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=31ee8035bcc24c59a2c53357242609&q=${city}&aqi=yes`
      );
      const data = await res.json();
      if (data.error) {
        toast.error("Enter valid city name");
      } else {
        //setting data into state
        dispatch({
          type: "GET_WEATHER",
          payload: data,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };

  const [city, setCity] = useState("");

  const searchWeather = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

  return (
    <div className="col-sm-12 col-md-4">
      <div
        className={dark ? "card p-3  bg-dark text-light" : "card p-3 bg-light"}
      >
        <h4>Today's Weather</h4>

        <form className="my-3" onSubmit={searchWeather}>
          <input
            type="text"
            required
            className="form-control my-2"
            placeholder="Enter city name..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <button className="btn btn-info my-3  w-100">Search Weather</button>
        </form>

        {!weather ? (
          <h1 className="text-center text-secondary">Loading...</h1>
        ) : (
          <div className="d-flex align-tems-center justify-content-between">
            <div>
              <h1>{weather.current.temp_c}C</h1>
              <h2 className="text-secondary"> {weather.location.name}</h2>
            </div>
            <div className="text-center">
              <img
                style={{ height: "75px", width: "75px" }}
                src={weather.current.condition.icon}
                alt="icon"
              />
              <p>current condition</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
