import React , { useContext } from 'react'
import useLocalStorage from './useLocalStorage'

const KEYS = {
   TRANSACTION_KEY : 'expense-tracker-transactions',
   BALANCE_KEY : "balance",
   INOCME_KEY : "income" ,
   EXPENSE_KEY :"expense"
}


const variableContext = React.createContext()

export function useGlobalVariables(){
    return useContext(variableContext)
}
/*
function reducer(state , actions){
    const number = actions.amount
    switch(actions.type){
      case OPTIONS.INCOME :
        return {...state , income : state.income + number} 
      case OPTIONS.EXPENSE :
        return {...state , expense : state.expense + number}
      default:
        return state
    }
}
*/

export default function VariablesContext({children}){
  const [transactions , setTransactions] = useLocalStorage(KEYS.TRANSACTION_KEY, [])
  const [income , setIncome] = useLocalStorage(KEYS.INOCME_KEY , 0)
  const [expense , setExpense] = useLocalStorage(KEYS.EXPENSE_KEY , 0)

  //const [state , dispatch] = useReducer(reducer , {balance : 0.00 , income : 0.00 , expense : 0.00})
  return (
    <variableContext.Provider value={{income ,expense ,setTransactions , transactions , setIncome , setExpense}}>
        {children}
    </variableContext.Provider>
  )
}
