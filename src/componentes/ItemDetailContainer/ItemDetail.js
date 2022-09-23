import React, { useContext, useEffect, useState } from 'react';
import ItemCount from '../ItemListContainer/ItemCount';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app/Provider';


const ItemDetail = ({ detalle }) => {
    const [count, setCount] = useState(0);

    const { agregarAlCarrito } = useContext(AppContext)
    return (
        <div className='detail'>
            <h3>{detalle.nombre} </h3>
            <img className='camiseta' src="../IMG/arg__2022.jpg" alt=""></img>
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.stock}</h5>
            <h5>{detalle.precio}</h5>

              {/* <div className='contador'>
            {
                count == 0 ?
                <ItemCount  stock={detalle.stock} initial={0} onAdd={(c) => { setCount(c) }}/>
                : <Link to="/Cart/"> Terminar compra </Link>

            } 
           </div>  */}
<div className='addtocart'>
<button onClick={() => agregarAlCarrito(detalle)}>agregar</button>

<Link to={`/Cart/`}>Comprar</Link>
            
</div>



        </div>
    )
}
export default ItemDetail;