import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {


    return (


        < div className='prod' id={item.id}>
            <h2>
                {item.equipo}
            </h2>
            <p>Precio: ${item.precio}</p >
            <p> Disponibles: {item.stock} unidades</p>

            <Link to={`/Item/${item.id}`}>Ver detalle</Link>
        </div>



    )
}
export default Item


// import React, { useState } from 'react'
// import ItemCount from './ItemCount'
// import { Link } from 'react-router-dom';


// const Item = ({id, equipo, precio, stock, img}) => {
//     const [count, setCount] = useState(0);
//     function onAdd(valor) {
//         alert(`Agregaste ${valor} camisetas al carrito`)
//     }
//   return (
//     <div className='carta' id={id}>
//         <div >
//             <h2>{equipo}</h2>
//             <p>Precio: {precio}</p>
//             <p>Stock: {stock} unidades</p>
//         </div>
//         {/* <div>
//             <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
//         </div> */}
//                     {
//                 count == 0 ?
//                     <ItemCount Productos={stock} initial={0} onAdd={(c) => { setCount(c) }} />
//                     : <Link to={`/Cart/`}>Comprar</Link>
//             }
//     </div>
//   )
// }

// export default Item
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';




// const Item = ({ item }) => {
//     // const [count, setCount] = useState(0);


//     return (


//         < div className='prod' id={item.id}>
//             <h2>
//                 {item.equipo}
//             </h2>
//             <p>Precio: ${item.precio}</p >
//             <p> Disponibles: {item.stock} unidades</p>

//             <Link to={`/Item/${item.id}`}>Ver detalle</Link>
//         </div>



//     )
// }
// export default Item