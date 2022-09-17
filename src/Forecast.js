import React from "react";
import { iconUrlFromCode } from "./weatherService";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="forecast-container">
        <p>{title}</p>
        <div className="forecast">
          {items.map((item) => (
            <div className="forecast-item">
              <p>{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} />
              <p>{`${item.temp}°`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
