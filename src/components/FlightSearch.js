import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFlightList, setSelectedFlight } from "../store/flightSlice";
import flightsData from "../data/flights.json";
import cities from "../data/cities.json";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const flightList = useSelector((state) => state.flights.flightList);
  const history = useHistory();

  const handleSearch = () => {
    if (!source || !destination || !date) return;
    const filtered = flightsData.filter(
      (f) =>
        f.deptCity.toLowerCase() === source.toLowerCase() &&
        f.arivalCity.toLowerCase() === destination.toLowerCase()
    );
    dispatch(setFlightList(filtered));
  };

  const handleBook = (flight) => {
    dispatch(setSelectedFlight({ flight, tripType, source, destination, date }));
    history.push("/flight-booking");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flight Booking App</h1>
      <h2>Search Flights</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />{" "}
          One-way
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            name="tripType"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={() => setTripType("roundtrip")}
          />{" "}
          Round-trip
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">Select Source</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select Destination</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
          Search
        </button>
      </div>

      {flightList.length > 0 && (
        <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Flight</th>
              <th>Airline</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Stops</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flightList.map((flight, index) => (
              <tr key={index}>
                <td>{flight.flightNbr}</td>
                <td>{flight.airlineName}</td>
                <td>
                  {flight.deptTime} - {flight.deptCity}
                </td>
                <td>
                  {flight.arivalTime} - {flight.arivalCity}
                </td>
                <td>
                  {flight.noOfStops === "0"
                    ? "Non-stop"
                    : `${flight.noOfStops} stop(s)`}
                </td>
                <td>Rs. {flight.price}</td>
                <td>
                  <button
                    className="book-flight"
                    onClick={() => handleBook(flight)}
                  >
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {flightList.length === 0 && source && destination && date && (
        <p>No flights found for the selected route.</p>
      )}
    </div>
  );
};

export default FlightSearch;
