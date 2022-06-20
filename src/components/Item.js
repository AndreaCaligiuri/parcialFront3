import React from 'react';
import { useState } from "react";
import styles from "./estilos.module.css";

export default function Item ({totalElementosComprados, nombre, descripcion, imagen, stock}) {
	const [productoStock, setProductoStock] = useState(stock);
  const comprar = () => {
    setProductoStock(prevState => prevState -1)
  }
	return(
		<div className="producto">
			{
				<>
				<h3>{nombre}</h3>
				<p>{descripcion}</p>
        <img className={styles.foto} src={imagen} alt={nombre}/>
				<h5>En stock: <span>{productoStock > 0 ? productoStock: "Agotado"}</span></h5>
				<button className={styles.btn} disabled={productoStock === 0} onClick={() => {comprar(); totalElementosComprados()}}>Comprar</button>
				</>
			}
		</div>
	)
}

