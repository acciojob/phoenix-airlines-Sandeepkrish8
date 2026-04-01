import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Welcome to Phoenix Airlines</h1>
      <p>Book your flights with ease</p>
      <button onClick={() => history.push("/flight-search")}>
        Search Flights
      </button>
    </div>
  );
};

export default Landing;
