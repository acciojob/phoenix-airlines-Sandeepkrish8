import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Phoenix Airlines</h1>
      <p>Book your flights with ease</p>
      <Link to="/flight-search">
        <button>Search Flights</button>
      </Link>
    </div>
  );
};

export default Landing;
