import { createSlice } from "@reduxjs/toolkit";


export const counterpageslice = createSlice({
    name : "Counter",
    initialState:{
        count:0
    },
    reducers:{
        add:(state,action) => { state.count+=1 },
        sub:(state,action) =>{ state.count -= 1},
        mul:(state,action) => {state.count *= 5},
        div:(state,action) => { state.count /= 2}
    }
})


export const {
    add,
    sub,
    mul,
    div
} = counterpageslice.actions


export default counterpageslice.reducer