import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      toast.error(`There is no user like this`);
      return rejectWithValue(e.response.status);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      await axios.post('/users/logout', credentials);
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
