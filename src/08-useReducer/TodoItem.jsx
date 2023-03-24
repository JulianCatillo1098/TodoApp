



export const TodoItem = ({ objeto, funcionEliminar, ontoggle }) => {

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${ objeto.done && "text-white" }`} onClick={() => ontoggle(objeto.id)}>
          {objeto.descripcion}
        </span>

        <button
          className="btn btn-danger"
          onClick={() => funcionEliminar(objeto.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
