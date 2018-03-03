// @ts-check

import { createStore } from 'redux';

/**
 *  Action generators
 */

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ setValue }) => ({
  type: 'SET',
  setValue,
});


/**
 * Reducers
 * 1. Reducers are pure functions
 * 2. state and action must be immutable
 */

const countReducer = (state = { count: 0 }, action) => {
  // console.log('Store Called', action.type);
  console.log(action);

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };

    case 'DECREMENT':
      return { count: state.count - action.decrementBy };

    case 'SET':
      return { count: action.setValue };
    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe((data) => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 15 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(setCount({ setValue: 934 }));
