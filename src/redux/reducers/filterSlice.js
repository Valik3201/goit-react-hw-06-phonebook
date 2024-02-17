import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state for the filter slice.
 * @constant {string}
 */
const initialState = '';

/**
 * Redux slice for managing the filter.
 * @constant {object}
 */
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    /**
     * Reducer function for setting the filter value.
     * @function
     * @param {string} _state - Current state of the filter.
     * @param {object} action - The action containing the new filter value.
     * @returns {string} The new filter value.
     */
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
});

/**
 * Action creator for setting the filter.
 */
export const { setFilter } = filterSlice.actions;

/**
 * Reducer for the filter slice.
 * @constant {function}
 */
export default filterSlice.reducer;
