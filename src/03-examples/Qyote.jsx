import { useLayoutEffect, useRef, useState } from "react";

export const Qyote = ({ nombre, color }) => {
  const parrafo = useRef();
  const [tamañoCaja, setTamañoCaja] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const datosCaja = parrafo.current.getBoundingClientRect();
    console.log("datosCaja", datosCaja);
    const { height, width } = datosCaja;
    setTamañoCaja({
      height: height,
      width: width,
    });
  }, [nombre]);

  return (
    <>
      <blockquote className="blockquote text-right" style={{ display: "flex" }}>
        <p ref={parrafo} className="mb-1">
          Nombre= {nombre}
        </p>
        <footer className="blockquote-footer">color= {color}</footer>
      </blockquote>
      <code>{JSON.stringify(tamañoCaja)}</code>
    </>
  );
};
