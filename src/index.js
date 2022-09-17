import React, { useEffect, useState } from "react";
import "./styles.scss";
import ReactDOM from "react-dom";
import * as Unicons from "@iconscout/react-unicons";
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import DateAndTime from "./DateAndTime";
import Weather from "./Weather";
import Forecast from "./Forecast";
import getFormattedWeatherData from "./weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "edirne" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="sub-root">
      <div className="container">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <DateAndTime />
            <Weather weather={weather} />
            <div className="fcc">
              <Forecast title={"Hourly Forecast"} items={weather.hourly} />
              <Forecast title={"Daily Forecast"} items={weather.daily} />
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        autoClose={600}
        theme="colored"
        className="toast"
        newestOnTop={true}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
