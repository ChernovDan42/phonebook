import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './userOperations';

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
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
       
        return initialState;
      })
      .addCase(refreshUser.pending, state => {
        state.isFetchCurrentUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
        state.isFetchCurrentUser = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isFetchCurrentUser = false;
      });
  },
});

export default userSlice.reducer;
