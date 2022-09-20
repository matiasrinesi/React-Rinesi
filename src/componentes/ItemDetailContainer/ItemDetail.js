import React, { useState } from 'react';
import ItemCount from '../ItemListContainer/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ detalle }) => {
    const [count, setCount] = useState(0);
    return (
        <div className='detail'>
            <h3>{detalle.nombre} </h3>
            <img className='camiseta' src="../IMG/arg__2022.jpg" alt=""></img>
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.stock}</h5>
            <h5>{detalle.precio}</h5>


            {
                count == 0 ?
                <ItemCount className='contador' stock={detalle.stock} initial={0} onAdd={(c) => { setCount(c) }}/>
                : <Link to="/Cart/"> Terminar compra </Link>

            } 
           
            




        </div>
    )
}
export default ItemDetail;