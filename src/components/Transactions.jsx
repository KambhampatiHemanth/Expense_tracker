import React from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'
import Transaction from './Transaction'


export default function Transactions() {
  const {transactions} = useGlobalVariables()
 
  return (
    <ul className='list'>
      {transactions && transactions.map((transaction) =>{
        return <Transaction key={transaction.id} transaction = {transaction} />
      })}
    </ul>
  )
}
