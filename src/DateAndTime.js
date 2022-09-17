import React, { useEffect, useState } from "react";

function DateAndTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let dayNum = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const [ctime, setCtime] = useState(time);
  function updateTime() {
    setCtime(`${new Date().getHours()}:${new Date().getMinutes()}`);
  }
  setInterval(updateTime, 1000);

  return (
    <>
      <p className="date blue">
        {day}, {dayNum} {month} {year} | Local Time: {ctime}
      </p>
    </>
  );
}
export default DateAndTime;
