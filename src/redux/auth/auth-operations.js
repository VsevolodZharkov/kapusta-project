import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const tokenAuth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk('auth/register', credentials => {
  return axios
    .post('/auth/register', credentials)
    .then(() => {
      return axios
        .post('/auth/login', credentials)
        .then(({ data }) => {
          tokenAuth.set(data.accessToken);
          return data;
        })
        .catch(error => {
          console.log(error.response.data.message);
        });
    })
    .catch(error => {
      console.log(error.response.data.message);
    });
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);

    tokenAuth.set(data.accessToken);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    tokenAuth.unset();
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const sid = state.auth.sid;
    const refreshToken = state.auth.refreshToken;

    if (!sid) {
      return rejectWithValue('error');
    }
    tokenAuth.set(refreshToken);
    try {
      const { data } = await axios.post('/auth/refresh', { sid });
      tokenAuth.set(data.newAccessToken);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);


