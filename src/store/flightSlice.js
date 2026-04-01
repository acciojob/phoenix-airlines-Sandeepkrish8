import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    flightList: [],
    selectedFlight: null,
    bookingDetails: null,
  },
  reducers: {
    setFlightList: (state, action) => {
      state.flightList = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    resetFlightList: (state) => {
      state.flightList = [];
    },
  },
});

export const { setFlightList, setSelectedFlight, setBookingDetails, resetFlightList } =
  flightSlice.actions;

export default flightSlice.reducer;
