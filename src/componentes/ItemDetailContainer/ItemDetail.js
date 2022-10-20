import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
import ItemCount from '../ItemListContainer/ItemCount';


const ItemDetail = ({ products, }) => {

    const { agregarAlCarrito } = useContext(AppContext)
    let valor

    const onAdd = (valor) => {
        if (valor < 1) {
            alert('Debes agregar al menos 1 producto')
        } else {
            agregarAlCarrito(products, valor)

        }
    }

    return (
        <>


            <div className='detalle'>
              <div className='adentro'>
                <div> <h3>{products.equipo}</h3> <h5>precio: ${products.precio}</h5></div>
                <img src={products.imagen} alt="camisetas" width={150}></img>

                {/* <button onClick={() => { agregarAlCarrito(products) }}>agregar</button> */}

                <ItemCount  onAdd={onAdd} stock={products.stock} />


   <div>
                <Link className='buy' to={`/Cart/`}>Comprar</Link>
            </div>
            </div>
            </div>

         

        </>


    )



}
export default ItemDetail;



// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { AppContext } from '../../app/Provider';
// import Contador from '../ItemListContainer/ItemCount';


// const ItemDetail = ({ products, }) => {

//     const { agregarAlCarrito } = useContext(AppContext)


//     return (
//         <>


//             <div>
//                 <div> <h3>{products.equipo}</h3> <h5>precio: ${products.precio}</h5></div>
//                 {/* <Contador stock={products.stock} valor={valor} /> */}
//                 <button onClick={() => { agregarAlCarrito(products) }}>agregar</button>

//             </div>

//             <div>
//                 <Link to={`/Cart/`}>Comprar</Link>
//             </div>

//         </>


//     )



// }
// export default ItemDetail;


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