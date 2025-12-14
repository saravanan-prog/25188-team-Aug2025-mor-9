Redux Toolkit Thunk?
====================
    Redux Thunk is a middleware that allows you to write async logic (like API calls) inside Redux.

    Redux Toolkit (RTK) includes Redux Thunk by default, so you don’t need to install or configure it separately.

    🔹 Lifecycle of createAsyncThunk
    
        -------------------------
        | Stage   | Action Type |
        | ------- | ----------- |
        | Start   | `pending`   |
        | Success | `fulfilled` |
        | Failure | `rejected`  |
        -------------------------





Redux Toolkit Way: createAsyncThunk
--------------------------------------


1️⃣ Create Async Thunk
    thunk.js
    --------

    import { createAsyncThunk } from '@reduxjs/toolkit';

    export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
        async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return response.json();
        }
    );


2️⃣ Create Slice
----------------
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './userThunk';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;


3️⃣ Dispatch Thunk in Component
--------------------------------

import { useDispatch } from 'react-redux';
import { fetchUsers } from './userThunk';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>Users List</div>;
};
