import React from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'

export default function Transaction({transaction}) {
  const {transactions, setTransactions , setExpense , setIncome} = useGlobalVariables()
  
  function handleClick(e){
      const Transactions = [...transactions]
      const newTransactions = Transactions.filter(tran => tran.id !== transaction.id) 
      setTransactions(newTransactions)
      if(transaction.amount[0]=== "-"){
        setExpense(prevExp=> prevExp - Number(transaction.amount))
      }else{
        setIncome(prevIncome => prevIncome - Number(transaction.amount))
      }

  }
  return (
    <li className={transaction.amount[0] === "-" ? "minus" : "plus"} > {transaction.text} <span>{Number(transaction.amount).toFixed(2)}</span>
        <button className='delete-btn' onClick={handleClick} >x</button>
    </li>
  )
}
