import { useState } from "react";

export const useForm = (inicialEstado = {}) => {
  const [formeState, setFormeState] = useState(inicialEstado);

  const onchangueinputs = ({ target }) => {
    const { name, value } = target;
    setFormeState({
      ...formeState,
      [name]: value,
    });
  };

  return {
    formeState,
    onchangueinputs,
    setFormeState,
    inicialEstado
  };
};
