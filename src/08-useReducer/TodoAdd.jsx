import { useForm } from "../hook/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const {formeState:{ descripcion}, onchangueinputs, setFormeState } = useForm({
    descripcion: ''
  });

  const submitFormulario = (event) => {
    event.preventDefault();
    if (descripcion.length <= 1) return;

    const objetoNuevo = {
      id: new Date().getTime(),
      done: false,
      descripcion: descripcion,
    };
    onNewTodo(objetoNuevo);
  };

  return (
    <>
      <form onSubmit={submitFormulario}>
        <input
          type="text"
          placeholder="¿Que hay que hacer? "
          className="form-control"
          name="descripcion"
          value={descripcion}
          onChange={onchangueinputs}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};
