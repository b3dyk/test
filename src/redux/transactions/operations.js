import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e0f5a059bb472a742d0a27.mockapi.io';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
