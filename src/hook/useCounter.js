import { useState } from "react"

export const useCounter = (inicialDelCouter=10) => {

    const [counter, setCounter] = useState(inicialDelCouter)

    const incrementar = (value=1)=>{
        setCounter(counter+value)
    }
    const decrementar = (value=1)=>{
        setCounter(counter-value)
    }
    const resetiar = ()=>{
        setCounter(inicialDelCouter)
    }

  return {
    counter,
    incrementar,
    decrementar,
    resetiar
  }
    
  
}
