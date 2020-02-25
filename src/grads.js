import * as api from './api';

// Actions
export const LOAD_GRADS = 'grads/LOAD';
export const FETCH_GRADS = 'grads/FETCH';

// Action Creators
export function fetchGrads(payload) {
  return {
    type: FETCH_GRADS,
    payload
  };
}

export function loadGrads() {
  return {
    type: LOAD_GRADS
  };
}

// Reducer
export default function(state = { data: [], isLoading: false }, action) {
  switch (action.type) {
    case FETCH_GRADS:
      return { data: action.payload, isLoading: false };
    case LOAD_GRADS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

// Side effect functions
export const getGradsFromApi = async (dispatch) => {
  dispatch(loadGrads());
  const data = await api.fetchGrads();
  dispatch(fetchGrads(data));
};
