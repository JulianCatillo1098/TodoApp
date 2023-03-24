import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoApp } from "./08-useReducer/TodoApp";

import { MainApp } from "./09-useContext/MainApp";
// import { TodoApp } from './08-useReducer/TodoApp'
// import  './08-useReducer/intro-reducer'
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
// import { CallcackHook } from './06-memos/CallcackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultpleCustomHooks } from './03-examples/MultpleCustomHooks'
// import { FormWithCustomHook } from './02-useEffct/FormWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffct/SimpleForm'
// import { Counter } from './01-useState/Counter'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <TodoApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
