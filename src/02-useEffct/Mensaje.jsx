import React, { useEffect, useState } from "react";

export const Mensaje = () => {
    const [coords, setcoords] = useState({x:0,y:0})
  useEffect(() => {

    const onMouseMove = ({ x, y }) => {
      setcoords({x,y})
    };

    window.addEventListener('mousemove',onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h2 className="mt-5">MENSAJE</h2>
      {JSON.stringify(coords)}
    </>
  );
};
