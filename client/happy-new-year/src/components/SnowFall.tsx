import React from "react";
import "../stylesheet/snow.scss";

const Snowfall = ({ numberOfFlakes = 50 }) => {
  const snowflakes = Array.from({ length: numberOfFlakes });

  return (
    <div className="snow">
      {snowflakes.map((_, index) => (
        <Snowflake key={index} />
      ))}
    </div>
  );
};

const Snowflake = () => {
  const left = `${Math.random() * 100}%`; // Random position between 0% and 100%
  const fontSize = `${Math.random() * 20 + 10}px`; // Random font size between 10px and 30px
  const animationDuration = `${Math.random() * 5 + 5}s`; // Duration 5s to 10s
  const animationDelay = `${Math.random() * 3}s`; // Random delay 0s to 3s

  return (
    <>
      <div
        className="snowflake"
        style={{
          left,
          fontSize,
          animationDuration,
          animationDelay,
        }}
      >
        ❄️
      </div>
    </>
  );
};

export default Snowfall;
