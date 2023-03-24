import React, { useEffect, useReducer } from "react";
import { useTodo } from "../hook/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { estadoprincipal, handleNewTodo, deletNewTod, ontoggleNewTod, pendingTodosCount,
    todosCount,} = useTodo();

  return (
    <>
      <h2>
        TodoApp : {todosCount},<small>pendientes: {pendingTodosCount}</small>{" "}
      </h2>
      <hr />
      <div className="row">
        <div className="col-7 ">
          <TodoList
            estadoprincipal={estadoprincipal}
            funcionEliminar={deletNewTod}
            ontoggle={ontoggleNewTod}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
