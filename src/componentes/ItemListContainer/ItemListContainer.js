

import React, { useEffect, useState } from 'react'
import { getItems } from '../../app/firebaseapi'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        getItems().then(res => setProductos(res))

    }, [])



    return (
        <div>
            <h2 className='info'>Hola, bienvenido! En el dia de hoy contamos con estos productos a la venta
            </h2>

            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer
// const ItemListContainer = ({ cantidad }) => {
//     const getProductos = (confirmacion) => new Promise((res, err) => {
//         setTimeout(() => {
//             if (confirmacion) {
//                 res(product)
//             } else {
//                 err("Rechazado")
//             }
//         }, 2000)
//     })

//     const [productLista, setproductosLista] = useState()
//     useEffect(() => {
//         getProductos(true)
//             .then(productLista => setproductosLista(productLista))
//     }, [])



//     return (
//         <div>
//             <h2 className='info'>Bienvenido a Shirtmuseum! Tenemos disponibles {cantidad} productos a la venta:
//             </h2>

//             <div>
//                 {productLista && <ItemList productLista={productLista} />}
//             </div>
//         </div>
//     )
// }

// export default ItemListContainer