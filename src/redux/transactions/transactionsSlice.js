import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/init-state';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransactions(state, { payload }) {
      state.transactions = [...state.transactions, ...payload];
    },

    deleteTransaction(state, { payload }) {
      state.transactions = state.transactions.filter(
        item => item[0] !== payload
      );
    },

    editStatus(state, { payload: { id, status } }) {
      const idx = state.transactions.findIndex(
        transaction => transaction[0] === id
      );

      state.transactions[idx][1] = status;
    },

    setFilterStatus(state, { payload }) {
      state.filter.status = payload;
    },

    setFilterType(state, { payload }) {
      state.filter.type = payload;
    },

    setFilteredTrancactions(state, { payload }) {
      state.filteredTransactions = [...payload];
    },
  },
});

export const {
  addTransactions,
  deleteTransaction,
  editStatus,
  setFilterStatus,
  setFilterType,
  setFilteredTrancactions,
} = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
