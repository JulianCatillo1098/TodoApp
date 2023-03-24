import React, { useRef } from "react";



export const FocusScreen = () => {
    const referencia = useRef();

const click = () => {

    referencia.current.select()
  
};
  return (
    <>
    <input
        
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
      />
      <input
        ref={referencia}
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
      />
      <input
        
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={click}>
        set focus
      </button>
    </>
  );
};
