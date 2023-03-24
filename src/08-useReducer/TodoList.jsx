import { TodoItem } from "./TodoItem";


export const TodoList = ({estadoprincipal, funcionEliminar, ontoggle}) => {

  return (
    <>
      <ul className="list-group">
      {estadoprincipal.map((objeto) => (
          <TodoItem key={objeto.id} objeto={objeto} funcionEliminar={funcionEliminar} ontoggle={ontoggle}/>
        ))}
      </ul>
    </>
  );
};
