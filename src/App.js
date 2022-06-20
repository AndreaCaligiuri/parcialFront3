import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
const [contador, setContador] = useState(0);
const totalElementosComprados = () => {
	setContador(prevState => prevState + 1)
}
	return (
		<div className="App">
			<Cabecera contadorInicial = {contador}/>
			<Listado totalElementosComprados = {totalElementosComprados}/>
		</div>
	);
}
export default App;