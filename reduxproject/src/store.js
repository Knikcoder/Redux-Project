import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  // Define your initial state here
  // For example:
  educationalDetails: [],
  additionalDetails: [],
};

// Define your reducer function to handle actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EDUCATIONAL_DETAIL':
      return {
        ...state,
        educationalDetails: [...state.educationalDetails, action.payload],
      };
    case 'ADD_ADDITIONAL_DETAIL':
      return {
        ...state,
        additionalDetails: [...state.additionalDetails, action.payload],
      };
    // Add more cases to handle different actions
    default:
      return state;
  }
}

// Create the Redux store with the reducer and apply the thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
