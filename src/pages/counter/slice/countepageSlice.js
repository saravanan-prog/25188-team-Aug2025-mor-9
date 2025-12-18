import {createSlice} from "@reduxjs/toolkit"

export const counterpageSlice = createSlice({
    name : "counter",
    initialState:{
        count : 0,
       
    },
    reducers:{
        add : (state,action) => {
           state.count += 1
        },
        sub : (state,action) => {
            state.count -= 1
        }
    }

})

export const {
    add,
    sub
} = counterpageSlice.actions

export default counterpageSlice.reducer