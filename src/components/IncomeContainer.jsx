import React from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'
export default function IncomeContainer() {
  const {income} = useGlobalVariables()
  return (
    <div>
      <h4>Income</h4>
      <p className='money plus'>₹{income.toFixed(2)}</p>
    </div>
  )
}
