import { createSlice } from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  findUserByIdThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
  updateUserThunk,
} from "./users-thunk";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null,
  },
  extraReducers: {
    [findUserByIdThunk.fulfilled]: (state, action) => {
      state.publicProfile = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
      return state;
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log("IN REDUCER", payload);
      // const userNdx = state.users.findIndex((u) => u._id === payload._id);
      // console.log(payload);
      // state.users[userNdx] = {
      //   ...state.users[userNdx],
      //   ...payload,
      // };
      state.currentUser = payload;
      return state;
    },
    [updateUserThunk.rejected]: (state, action) => {
      console.log("ERROR THROWN", action);
      console.log("ERROR THROWN", state);
    },
  },
});

export default usersReducer.reducer;
