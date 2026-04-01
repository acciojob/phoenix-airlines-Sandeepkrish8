import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBookingDetails } from "../store/flightSlice";

const FlightBooking = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedFlight = useSelector((state) => state.flights.selectedFlight);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!selectedFlight || !selectedFlight.flight) {
      history.replace("/flight-search");
    }
  }, [selectedFlight, history]);

  if (!selectedFlight || !selectedFlight.flight) {
    return null;
  }

  const { flight, tripType, source, destination, date } = selectedFlight;

  const handleConfirm = () => {
    if (!name || !email || !phone) return;
    dispatch(
      setBookingDetails({
        flight,
        tripType,
        source,
        destination,
        date,
        name,
        email,
        phone,
      })
    );
    history.push("/confirmation");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flight Booking</h1>
      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Flight:</strong> {flight.flightNbr} - {flight.airlineName}
        </p>
        <p>
          <strong>Route:</strong> {flight.deptCity} → {flight.arivalCity}
        </p>
        <p>
          <strong>Time:</strong> {flight.deptTime} - {flight.arivalTime}
        </p>
        <p>
          <strong>Price:</strong> Rs. {flight.price}
        </p>
        <p>
          <strong>Trip Type:</strong> {tripType}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
      </div>

      <h2>Passenger Details</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", marginBottom: "5px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "5px" }}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ display: "block", marginBottom: "5px" }}
        />
      </div>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
