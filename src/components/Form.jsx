import React, { useRef } from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'
const { v4: uuidv4 } = require('uuid')

export default function Form() {
  const textRef = useRef()
  const numberRef = useRef()
  const {setTransactions , setIncome , setExpense} = useGlobalVariables()
  function handleClick(e){
    e.preventDefault()
    const text = textRef.current.value
    const numbertext = numberRef.current.value
    setTransactions(prevTrans => [...prevTrans , {id : uuidv4() , text: text , amount : numbertext}])
    if(numbertext[0] === '-'){
      //Expense
      setExpense(prevExpense => prevExpense + Number(numbertext))
    }else{
      //Income
      setIncome(prevIncome => prevIncome + Number(numbertext))
    }
    textRef.current.value = '';
    numberRef.current.value = '';
  }
  return (
    <form id='form'>
        <div className='form-control'>
            <label for='text'>Text</label>
            <input ref={textRef}  type='text' id='text' placeholder='Enter text.....'></input>
        </div>
        <div className='form-control'>
            <label for='number'>Amount <br></br>income : +ve , expense : -ve </label>
            <input  ref={numberRef}  type='number' id='number' placeholder='Enter amount.....'></input>
        </div>
        <button className='btn' onClick={handleClick}  >Add Transaction</button>
    </form>
  )
}
