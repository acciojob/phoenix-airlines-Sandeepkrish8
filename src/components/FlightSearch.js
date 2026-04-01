import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("one-way");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (!source || !destination || !date) {
      alert("Please fill all required fields");
      return;
    }
    if (tripType === "round-trip" && !returnDate) {
      alert("Please select a return date");
      return;
    }

    const mockFlights = [
      { id: 1, from: source, to: destination, date, price: "$200" },
      { id: 2, from: source, to: destination, date, price: "$350" },
    ];
    setFlights(mockFlights);
  };

  const handleBook = (flight) => {
    dispatch({ type: "SET_FLIGHT", payload: flight });
    history.push("/flight-booking");
  };

  return (
    <div>
      <h2>Search Flights</h2>

      <div>
        <label>
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={(e) => setTripType(e.target.value)}
          />
          One-way
        </label>
        <label>
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={tripType === "round-trip"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Round-trip
        </label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Source City"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Destination City"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {tripType === "round-trip" && (
        <div>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      )}

      <button onClick={handleSearch}>Search</button>

      {flights.length > 0 && (
        <div>
          <h3>Available Flights</h3>
          {flights.map((flight) => (
            <div key={flight.id}>
              <span>
                {flight.from} to {flight.to} on {flight.date} - {flight.price}
              </span>
              <button className="book-flight" onClick={() => handleBook(flight)}>
                Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
