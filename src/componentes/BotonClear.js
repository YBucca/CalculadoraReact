import React from "react";
import "../hojas-estilo/BotonClear.css"

const BotonClear = (props) =>(
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
)
export default BotonClear;
//componente funcional con funcion de flecha por ser simple al igual q el input