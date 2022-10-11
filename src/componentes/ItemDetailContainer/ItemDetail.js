import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
import Contador from '../ItemListContainer/ItemCount';


const ItemDetail = ({ products, }) => {

    const { agregarAlCarrito } = useContext(AppContext)


    return (
        <>


            <div>
                <div> <h3>{products.equipo}</h3> <h5>precio: ${products.precio}</h5></div>
                {/* <Contador stock={products.stock} valor={valor} /> */}
                <button onClick={() => { agregarAlCarrito(products) }}>agregar</button>

            </div>

            <div>
                <Link to={`/Cart/`}>Comprar</Link>
            </div>

        </>


    )



}
export default ItemDetail;


// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { AppContext } from '../../app/Provider';
// // import Contador from '../ItemListContainer/Contador'


// const ItemDetail = ({ products }) => {

// console.log(products)

//     const { agregarAlCarrito } = useContext(AppContext)



//     return (
//         <>
//             <Link to={`/Cart/`}>Comprar</Link>

//             <div>
//                 <div> <h3>{products.equipo}</h3> <h5>precio: ${products.precio}</h5></div>
//                 <button onClick={() => { agregarAlCarrito(products) }}>agregar</button>

//             </div>

//             <div>

//             </div>

//         </>
        
//     )



// }
// export default ItemDetail;