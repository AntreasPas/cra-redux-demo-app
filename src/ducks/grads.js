// Actions
export const FETCH_GRADS = 'grads/FETCH';

// Action Creators
export function fetchGrads(payload) {
  return {
    type: FETCH_GRADS,
    payload
  };
}

// Reducer
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GRADS:
      return action.payload;
    default:
      return state;
  }
}

// Operations
