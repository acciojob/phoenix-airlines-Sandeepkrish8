
import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/flight-search" component={FlightSearch} />
          <Route path="/flight-booking" component={FlightBooking} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
    </div>
  )
}

export default App
