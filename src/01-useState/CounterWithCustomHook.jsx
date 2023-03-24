import { useCounter } from "../hook/useCounter";

export const CounterWithCustomHook = () => {

const {counter,incrementar,decrementar,resetiar} = useCounter ()

    return (
    <>
      <h2>Counter With CustomHook: {counter}</h2>
      <hr/>
      <button className="btn btn-primary" onClick={()=>incrementar(5)}>+1</button>
      <button className="btn btn-danger" onClick={resetiar}>Reset</button>
      <button className="btn btn-primary" onClick={()=>decrementar(5)}>-1</button>
    </>
  );
};
