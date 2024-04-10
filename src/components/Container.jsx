import React , {useEffect} from 'react'
import { useGlobalVariables } from '../CustomHooks/VariablesContext'
export default function Container() {
  const {income , expense } = useGlobalVariables()
  useEffect(()=>{
    console.log(income , expense)
  },[income , expense])
  return (
    <div >
        <div>
            <h4>Your Balance</h4>
            <h1>${(income + expense).toFixed(2)}</h1>
        </div>
    </div>
  )
}
