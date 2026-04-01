import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FlightBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();
  const flight = useSelector((state) => state.flight);

  if (!flight) {
    history.push("/flight-search");
    return null;
  }

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) return;

    dispatch({
      type: "SET_USER",
      payload: { name, email, phone },
    });

    history.push("/confirmation");
  };

  return (
    <div>
      <h2>Flight Booking</h2>
      <p>
        <strong>Flight:</strong> {flight.from} to {flight.to} on {flight.date}
      </p>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
