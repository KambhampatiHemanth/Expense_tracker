import React from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'
export default function ExpenseContainer() {
  const {expense} = useGlobalVariables()
  return (
    <div>
    <h4>Expense</h4>
    <p className='money minus'>₹{expense.toFixed(2)}</p>
  </div>
  )
}
