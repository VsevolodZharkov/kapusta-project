import { createSlice } from '@reduxjs/toolkit';
import {
  getExpanses,
  addExpanses,
  getIncome,
  addIncome,
  // newBalance,
} from './transaction-operations';

const initialState = {
  expenses: {
    expenses: [],
    monthsStats: {},
  },
  income: {
    income: [],
    monthsStats: {},
  },

  loading: false,
};

const transaction = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [addExpanses.pending]: (state, _) => {
      state.loading = true;
    },
    [addExpanses.fulfilled]: (state, { payload }) => {
      state.expenses.expenses.push(payload.transaction);
      //   state.auth.useData.balance = payload.newBalance;
      state.loading = false;
    },
    [addExpanses.rejected]: (state, _) => {
      state.loading = false;
    },

    [addIncome.fulfilled]: (state, { payload }) => {
      state.income.income.push(payload.transaction);
      //   state.useData.balance = payload.newBalance;
      state.loading = false;
    },
    [addIncome.pending]: (state, _) => {
      state.loading = true;
    },
    [addIncome.rejected]: (state, _) => {
      state.loading = false;
    },

    [getExpanses.fulfilled]: (state, { payload }) => {
      state.expenses.expenses = payload.expenses;
      state.expenses.monthsStats = payload.monthsStats;
      state.loading = false;
    },
    [getExpanses.pending]: (state, _) => {
      state.loading = true;
    },
    [getExpanses.rejected]: (state, _) => {
      state.loading = false;
    },

    [getIncome.fulfilled]: (state, { payload }) => {
      state.income.income = payload.income;
      state.income.monthsStats = payload.monthsStats;
      state.loading = false;
    },
    [getIncome.pending]: (state, _) => {
      state.loading = true;
    },
    [getIncome.rejected]: (state, _) => {
      state.loading = false;
    },
    //   [newBalance.fulfilled]: (state, { payload }) => {
    //     state.newBalance = Number(payload.newBalance);
    //     state.loading = false;
    //   },
    //   [newBalance.pending]: (state, _) => (state.loading = true),

    //   [newBalance.rejected]: (state, _) => (state.loading = false),
  },
});

export default transaction.reducer;
