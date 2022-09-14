import React from 'react'

const ItemDetail = ({ detalle }) => {
    return (
        <div className='detail'>
            <h3>{detalle.nombre} </h3>
            <img className='camiseta' src="../IMG/arg__2022.jpg" alt=""></img>
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.precio}</h5>




        </div>
    )
}
export default ItemDetail;