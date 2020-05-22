import { expensesActionTypes } from '../actions/expensesActions';

const defaultState = [];

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case expensesActionTypes.Add:
      return [...state, { ...action.expense}];
    case expensesActionTypes.Remove:
      return state.filter(expense => expense.key !== action.expenseKey);
    case expensesActionTypes.Update:
      const updateIndex = state.findIndex(expense => expense.key === action.expenseKey);
      const newState = Object.assign(state.slice(), {
        [updateIndex]: action.expense
      });
      return newState;
    default:
      return state;
  }
};
