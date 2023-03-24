import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import { Mensaje } from "./Mensaje";

export const FormWithCustomHook = () => {
const {formeState,onchangueinputs,setFormeState,inicialEstado}=useForm({
  username:'',
  email:'',
  pasword:''
})

const {username,email,pasword,}=formeState

const onResetForm= ()=>{
  setFormeState(inicialEstado)

}


  // useEffect(() => {
  //   // console.log("primer useEffec");
  // }, []);
  // useEffect(() => {
  //   // console.log("estdoado principal useEffec");
  // }, [formeState]);
  // useEffect(() => {
  //   // console.log("solo el username useEffec");
  // }, [username]);
  
  return (
    <>
      <h2>Formulario con custom Hook</h2>
      <hr />

      <input
        type="text"
        placeholder="Nombre del usuario"
        className="form-control"
        name="username"
        value={username}
        onChange={onchangueinputs}
      />

      <input
        type="email"
        placeholder="Email"
        className="form-control mt-2"
        name="email"
        value={email}
        onChange={onchangueinputs}
      />

      <input
        type="pasword"
        placeholder="pasword"
        className="form-control mt-2"
        name="pasword"
        value={pasword}
        onChange={onchangueinputs}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  );
};
