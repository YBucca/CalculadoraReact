import "./App.css";
import freeCodeCamp from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Input from "./componentes/Input";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
function App() {
	const [input, setInput] = useState("");

	const agregarInput = (valor) => {
		setInput(input + valor);
	};
	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert("por favor ingrese valores nuevamente")
		}
	};

	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img
					src={freeCodeCamp}
					className="freecodecamp-logo"
					alt="logo de freeCodeCamp"
				/>
			</div>
			<div className="contenedor-calculadora">
				<Input input={input} />
				<div className="fila">
					<Boton manejarClick={agregarInput}>1</Boton>
					<Boton manejarClick={agregarInput}>2</Boton>
					<Boton manejarClick={agregarInput}>3</Boton>
					<Boton manejarClick={agregarInput}>+</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={agregarInput}>4</Boton>
					<Boton manejarClick={agregarInput}>5</Boton>
					<Boton manejarClick={agregarInput}>6</Boton>
					<Boton manejarClick={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={agregarInput}>7</Boton>
					<Boton manejarClick={agregarInput}>8</Boton>
					<Boton manejarClick={agregarInput}>9</Boton>
					<Boton manejarClick={agregarInput}>*</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={calcularResultado}>=</Boton>
					<Boton manejarClick={agregarInput}>0</Boton>
					<Boton manejarClick={agregarInput}>.</Boton>
					<Boton manejarClick={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear manejarClear={() => setInput("")}>
						Clear
					</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
