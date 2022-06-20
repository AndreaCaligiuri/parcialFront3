import React from 'react';
import data from "./data.json";
import Item from "./Item.js";

export default function Listado({totalElementosComprados}) {
	return (
		<div className="container">
			{
			data.map(item => (
				<
        Item key= {item.id} 
        nombre={item.producto.nombre} 
        descripcion={item.producto.descripcion}
        imagen={item.producto.foto} 
        stock={item.stock} 
        totalElementosComprados={totalElementosComprados}
        />))
			}
			</div>
		)
	}