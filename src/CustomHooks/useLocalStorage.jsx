import  { useEffect, useState } from 'react'

function getInitialValue(key , initialValue){
    const saveddata = JSON.parse(localStorage.getItem(key))
    if (saveddata) return saveddata
    if (initialValue instanceof Function) return initialValue()
    return initialValue
}


export default function useLocalStorage(key , initialValue) {
    const [value , setValue ] = useState(()=>{
        return getInitialValue(key , initialValue)
    })

    useEffect(()=>{
       localStorage.setItem(key , JSON.stringify(value))
    },[value])

    return [value , setValue]
}
