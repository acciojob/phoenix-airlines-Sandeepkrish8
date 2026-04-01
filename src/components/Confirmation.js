import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const history = useHistory();
  const booking = useSelector((state) => state.flights.bookingDetails);

  if (!booking || !booking.flight) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>No Booking Found</h1>
        <button onClick={() => history.push("/")}>Back to Home</button>
      </div>
    );
  }

  const { flight, tripType, source, destination, date, name, email, phone } =
    booking;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Booking Confirmed!</h1>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "left",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
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
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      </div>
      <button onClick={() => history.push("/")} style={{ marginTop: "20px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default Confirmation;
