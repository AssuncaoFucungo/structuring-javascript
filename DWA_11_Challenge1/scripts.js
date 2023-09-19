// Action Types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

// Reducer
function tallyReducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state > 0 ? state - 1 : state;
    case RESET:
      return 0;
    default:
      return state;
  }
}

// Store
function createStore(reducer) {
  let state = reducer(undefined, {});
  const listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    subscribe,
    getState,
  };
}

// Create the store with the tallyReducer
const store = createStore(tallyReducer);

// Log the initial state
console.log("Initial State:", store.getState());

// Scenario 1: Increment the counter by one
// Dispatch ADD action twice
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log("State after adding 2:", store.getState());

// Scenario 2: Decrement the counter by one
// Dispatch SUBTRACT action
store.dispatch({ type: SUBTRACT });
console.log("State after subtracting 1:", store.getState());

// Scenario 3: Resetting the Tally Counter
// Dispatch RESET action
store.dispatch({ type: RESET });
console.log("State after reset:", store.getState());
