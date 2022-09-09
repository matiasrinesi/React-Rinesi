import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id, equipo, precio, stock}) => {
    function onAdd(contador) {
        alert(`Agregaste ${contador} camisetas al carrito`)
    }
  return (
    <div id={id}>
        <div>
            <h2>{equipo}</h2>
            <p>Precio: {precio}</p>
            <p>Stock: {stock} unidades</p>
        </div>
        <div>
            <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default Item