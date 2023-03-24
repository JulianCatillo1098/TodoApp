import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";

export const SimpleForm = () => {
  const [formeState, setFormeState] = useState({
    username: "julian castillo",
    email: "julian@gmail.com",
  });

  const { username, email } = formeState;

  const onchangueinputs = ({ target }) => {
    const { name, value } = target;
    setFormeState({
      ...formeState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("primer useEffec");
  }, []);
  useEffect(() => {
    // console.log("estdoado principal useEffec");
  }, [formeState]);
  useEffect(() => {
    // console.log("solo el username useEffec");
  }, [username]);
  return (
    <>
      <h2>SIMPLEfORM</h2>
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

      {username === "julian castilloo" && <Mensaje />}
    </>
  );
};
