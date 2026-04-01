import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import Landing from "./Landing";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/flight-search" component={FlightSearch} />
          <Route path="/flight-booking" component={FlightBooking} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
