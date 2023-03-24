import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallcackHook = () => {
    const [counter, setCounter] = useState(10)

     const darClick = useCallback(
       (valorParametro) => {
        setCounter((value)=>value+valorParametro)
       },
       [],
     )
     
    
    
  return (
    <>
    <h1>contador : {counter} </h1>
    <hr/>
    <div><ShowIncrement elIncremento ={darClick}/></div>
    </>
  )
}
