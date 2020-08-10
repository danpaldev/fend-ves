import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";

var preguntas = [
  {
    cuerpo: "Que es una laptop?",
    respuesta: "PC portatil"
  },
  {
    cuerpo: "Que es la paleta?",
    respuesta: "Hielo"
  },
  {
    cuerpo: "Que es el espacio?",
    respuesta: "Estrella"
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return preguntas[action.payload.cuenta].cuerpo;

    case "prev":
      return preguntas[action.payload.cuenta].cuerpo;

    default:
      return state;
  }
}

const Reductor = () => {
  const [statePreguntas, dispatch] = useReducer(reducer, preguntas[0].cuerpo);
  const [cuenta, setCuenta] = useState(0); //If I set the initial state to 1, it will fix the double-click bug, but
  //But the counter is also defective backwards, so it need a fix!

  function siguiente() {
    setCuenta((prevCount) => prevCount + 1);

    dispatch({ type: "next", payload: { cuenta: cuenta } });

    console.log(cuenta);
  }

  function atras() {
    setCuenta((prevCount) => prevCount - 1);

    // dispatch({ type: "prev", payload: { cuenta: cuenta } });

    console.log(cuenta);
  }

  var medida = preguntas.length;

  return (
    <div>
      <p>{statePreguntas}</p>
      {medida > cuenta ? (
        <button onClick={siguiente}>Siguiente</button>
      ) : (
        <button onClick={atras}>Atras</button>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Reductor />
  </React.StrictMode>,
  rootElement
);
