import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Qyote } from "./Qyote";

export const MultpleCustomHooks = () => {
    const {incrementar, counter} = useCounter(1)
    const { data, isLoading, hasError } = useFetch(
        `https://pokeapi.co/api/v2/pokemon-color/${counter}`

  );

  console.log({ data, isLoading, hasError });



  const color =data?.name
  const nombre = data?.names[0].name
  

  return (
    <>
      <h2>BreakingBad quotes</h2>
      <hr />

      {isLoading===true? (<LoadingQuote/>):(<Qyote color={color} nombre={nombre}/> )}

      <button className="btn btn-primary" onClick={()=>incrementar(1)} disabled={isLoading}>
        Nex color
      </button>
      

    </>
  );
};
