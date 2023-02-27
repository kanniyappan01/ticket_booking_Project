import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
    name: 'seat',
    initialState:{
        data:null,
    },
    reducers:{
        insertData(state,action){
            console.log(action.payload) 
            state.data = action.payload;
        }
    }
});

export const seatAction = seatSlice.actions;

export default seatSlice;