import React, { useMemo, useState } from 'react'
import { useCounter } from '../hook/useCounter'

const heavyStuff = (numeroDeInteracciones) => {
  for(let i=0; i<numeroDeInteracciones; i++){
    console.log('ahi vamos ...')
  }
  return `${numeroDeInteracciones} interacciones realizadas` 
}



export const MemoHook = () => {
    const [valorBoton, setValorBoton] = useState(true)
    const {counter,incrementar}=useCounter(10)

   const memorizado= useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
    <h2>contador: <small>{counter}</small></h2>
    <hr/>
    <p>{memorizado}</p>
    <button className='btn btn-primary' onClick={()=>incrementar(1)}>+1</button>
    <button className='btn btn-danger' onClick={()=>setValorBoton(!valorBoton)}>EL VALOR ES : {JSON.stringify(valorBoton)}</button>
    </>
  )
}
