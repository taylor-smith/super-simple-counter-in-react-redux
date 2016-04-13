'use strict';

const initialState = {
  count: 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        count: state.count + 1
      }
    case 'DECREMENT_COUNTER':
      return {
        count: state.count -1
      }
    default:
      return state;
  }
}

export default counter;