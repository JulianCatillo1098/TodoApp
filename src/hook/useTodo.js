import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("estadoprincipal")) || [];
};

export const useTodo = () => {
  const [estadoprincipal, dispatch] = useReducer(todoReducer,[],init);

  useEffect(() => {
    localStorage.setItem("estadoprincipal", JSON.stringify(estadoprincipal));
  }, [estadoprincipal]);

  const handleNewTodo = (objeto) => {
    const accion = {
      type: "agregar un nuevo objeto",
      payload: objeto,
    };
    dispatch(accion);
  };

  const todosCount = estadoprincipal.length
  const pendingTodosCount= estadoprincipal.filter(objeto => objeto.done==true).length

  const deletNewTod = (id) => {
    dispatch({
      type: "eliminar un objeto",
      payload: id,
    });
  };

  const ontoggleNewTod = (id) => {
    dispatch({
      type: "tachar la descripcion de un  objeto",
      payload: id,
    });
  };

  return {
    estadoprincipal,
    handleNewTodo,
    deletNewTod,
    ontoggleNewTod,
    pendingTodosCount,
    todosCount,
  };
};
