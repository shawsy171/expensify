const FILTER_REDUCER_DEFAULT = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filterReducer = (state = FILTER_REDUCER_DEFAULT, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      // return Object.assign({}, state, { text: action.text });
      return { ...state, text: action.text };

    case 'SORT_BY_AMOUNT':
      return Object.assign({}, state, { sortBy: 'amount' });

    case 'SORT_BY_DATE':
      return Object.assign({}, state, { sortBy: 'date' });

    case 'SET_START_DATE':
      return Object.assign({}, state, { startDate: action.startDate });
    
    case 'SET_END_DATE':
      return Object.assign({}, state, { endDate: action.endDate });

    default: 
      return state;
  }
};

export default filterReducer;