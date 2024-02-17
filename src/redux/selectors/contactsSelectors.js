/**
 * Selects the contacts from the Redux state.
 * @function
 * @param {object} state - The Redux state.
 * @returns {Array} The contacts array from the state.
 */
export const selectContacts = state => state.contacts;

/**
 * Selects the filter from the Redux state.
 * @function
 * @param {object} state - The Redux state.
 * @returns {string} The filter value from the state.
 */
export const selectFilter = state => state.filter;
