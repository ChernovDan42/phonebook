import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './userOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isFetchCurrentUser = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
    },
    [refreshUser.rejected](state) {
      state.isFetchCurrentUser = false;
    },
  },
});

export default userSlice.reducer;
