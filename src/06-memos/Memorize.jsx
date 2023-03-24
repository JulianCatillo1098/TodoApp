import React, { useState } from 'react'
import { useCounter } from '../hook/useCounter'
import { Small } from './Small'



export const Memorize = () => {
    const [valorBoton, setValorBoton] = useState(true)
    const {counter,incrementar}=useCounter(10)
  return (
    <>
    <h2>contador: <small><Small valor={counter}></Small></small></h2>
    <hr/>
    <button className='btn btn-primary' onClick={()=>incrementar(1)}>+1</button>
    <button className='btn btn-danger' onClick={()=>setValorBoton(!valorBoton)}>EL VALOR ES : {JSON.stringify(valorBoton)}</button>
    </>
  )
}
