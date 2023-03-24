import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter]=useState({
        counter01: 10,
        counter02: 20,
        counter03: 30
    })

    const {counter01,counter02,counter03}= counter

    const sumar1 = ()=>{
        setCounter({
            ...counter,
            counter01: counter01 + 1,
            counter02: counter02 + 2
        }
        )
        

    }

  return (
    <>
      <h2>Counter01:{counter01}</h2>
      <h2>Counter01:{counter02}</h2>
      <h2>Counter01:{counter03}</h2>
      <hr />
      <button className="btn" onClick={sumar1}>+ 1</button>
    </>
  );
};
