export enum expensesActionTypes {
  Add = '[Expenses] Add',
  Update = '[Expenses] Update',
  Remove = '[Expenses] Remove'
}

export function addExpense(expense: any) {
  return {
    type: expensesActionTypes.Add,
    expense
  }
}

export function updateExpense(expenseKey: any, expense: any) {
  return {
    type: expensesActionTypes.Update,
    expenseKey,
    expense
  }
}

export function removeExpense(expenseKey: any) {
  return {
    type: expensesActionTypes.Remove,
    expenseKey
  }
}
