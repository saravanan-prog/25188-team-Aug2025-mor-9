React-Redux
============

    => When your app grows, passing state through many components (props drilling) gets messy.

    => Redux gives you a central store for app state, and React Redux connects that store to your React components.

    => React Redux is a tool that helps you share data (state) between many React components easily.

                    ┌─────────────┐
                    │   UI Layer  │
                    └─────▲───────┘
                          │
                    ┌─────┴───────┐
                    │   Actions   │
                    └─────▲───────┘
                          │
                    ┌─────┴───────┐
                    │  Reducers   │
                    └─────▲───────┘
                          │
                    ┌─────┴───────┐
                    │    Store    │
                    └─────────────┘















    1. Install packages
       ----------------
        npm install @reduxjs/toolkit react-redux


    2. Create a Slice (counterSlice.js)
       --------------------------------

       import { createSlice } from "@reduxjs/toolkit";

        const counterSlice = createSlice({
            name: "counter",
            initialState: {
                value: 0,
            },
            reducers: {
                increment: state => {
                    state.value += 1;   // allowed (Immer)
                },
                decrement: state => {
                    state.value -= 1;
                },
                incrementByAmount: (state, action) => {
                    state.value += action.payload;
                },
            },
        });

        export const {
            increment,
            decrement,
            incrementByAmount,
        } = counterSlice.actions;

        export default counterSlice.reducer;


    
    3. Create Store (store.js)
    --------------------------
        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "./counterSlice";

        export const store = configureStore({
            reducer: {
                counter: counterReducer,
            },
        });
    

    4. Wrap App with Provider (main.jsx / index.js)
    -----------------------------------------------

        import { Provider } from "react-redux";
        import { store } from "./store";

            <Provider store={store}>
                <App />
            </Provider>

    
    5. Use Redux in Component (Counter.jsx)
    -----------------------------------------

    import { useSelector, useDispatch } from "react-redux";
    import {
        increment,
        decrement,
        incrementByAmount,
    } from "./counterSlice";

    export default function Counter() {

        const count = useSelector(state => state.counter.value);
        const dispatch = useDispatch();

        return (
            <div>
                <h2>Count: {count}</h2>

                <button onClick={() => dispatch(increment())}>
                    +
                </button>

                <button onClick={() => dispatch(decrement())}>
                    -
                </button>

                <button onClick={() => dispatch(incrementByAmount(5))}>
                    +5
                </button>
            </div>
        );
    }

 

 Redux Diagram 
 ==============
        👤 User
         |
         | click / input
         ▼
   🖥 React Component
      (useDispatch)
         |
         | dispatch(action)
         ▼
      📦 ACTION
   ( what happened)
         |
         ▼
    ⚙️ REDUCER
   (update logic)
         |
         ▼
    🏪 STORE
  (global app state)
         |
         | useSelector()
         ▼
   🖥 React Component
   (UI re-renders)







