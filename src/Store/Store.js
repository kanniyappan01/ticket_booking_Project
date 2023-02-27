import { configureStore } from "@reduxjs/toolkit";
import seatSlice from "./SeatSlice";

const store = configureStore({
    reducer:{
        seat:seatSlice.reducer,
    }
});

export default store;