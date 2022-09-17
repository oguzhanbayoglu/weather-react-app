import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "./weatherService";

export default function Weather({
  weather: {
    name,
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      <div className="weather blue">
        <h3 className="location">{`${name}, ${country}`}</h3>
        <p className="weather-stat">{details}</p>
        <div className="weather-dtl">
          <img src={iconUrlFromCode(icon)} />
          <h3>{`${temp.toFixed()}°`}</h3>
          <div>
            <p>
              <Unicons.UilTemperature />
              Feels Like: {`${feels_like.toFixed()}°`}
            </p>
            <p>
              <Unicons.UilTear />
              Humidity: {`${humidity}%`}
            </p>
            <p>
              <Unicons.UilWind />
              Wind: {`${speed.toFixed()} km/h`}
            </p>
          </div>
        </div>
        <div className="weather-dtl-dtl">
          <Unicons.UilSun />
          <p>
            Rise: <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
          </p>
          <Unicons.UilSunset />
          <p>
            Set: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
          </p>
          <Unicons.UilArrowUp />
          <p>
            High: <span>{`${temp_max.toFixed()}°`}</span>
          </p>
          <Unicons.UilArrowDown />
          <p>
            Low: <span>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </>
  );
}
