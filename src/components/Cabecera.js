import React from 'react';
import styles from "./estilos.module.css";

export default function Cabecera({contadorInicial}) {
	return(
		<header className={styles.cab}>
			{
				<>
				<h1>Carrito de compras</h1>
				<p>Cantidad de productos <span className={styles.contador}>{contadorInicial}</span></p>
				</>
			}
		</header>
	)
}
