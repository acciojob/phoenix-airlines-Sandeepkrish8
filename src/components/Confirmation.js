import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const { flight, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = () => {
    dispatch({ type: "RESET" });
    history.push("/");
  };

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
      {flight && (
        <div>
          <p><strong>From:</strong> {flight.from}</p>
          <p><strong>To:</strong> {flight.to}</p>
          <p><strong>Date:</strong> {flight.date}</p>
        </div>
      )}
      <button onClick={goHome}>Go Back to Home</button>
    </div>
  );
};

export default Confirmation;
