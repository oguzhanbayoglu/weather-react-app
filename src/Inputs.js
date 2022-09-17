import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="input-nav">
      <form class="search">
        <input
          onSubmit={handleSearchClick}
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="search-bar"
          type="text"
          placeholder="Search for city..."
          tabIndex={1}
        />

        <button className="input-btn" onClick={handleSearchClick}>
          <Unicons.UilSearch color="#4f7d82" size="25" tabIndex={2} />
        </button>

        <button className="input-btn" onClick={handleLocationClick}>
          <Unicons.UilLocationPoint color="#4f7d82" size="25" tabIndex={3} />
        </button>
      </form>
      <div>
        <button
          name="metric"
          onClick={handleUnitChange}
          className="units-btn blue"
          tabIndex={4}
        >
          °C
        </button>
        <button
          name="imperial"
          onClick={handleUnitChange}
          className="units-btn blue"
          tabIndex={5}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
