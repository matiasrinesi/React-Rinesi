import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/Provider'

const Cart = () => {
    const { carrito } = useContext(AppContext)
    const { total } = useContext(AppContext)

    //const { totalPrice } = useContext(AppContext)
    const { removeCarrito } = useContext(AppContext)
    const { menos } = useContext(AppContext)

    return (
        <div className='ca'>

            {carrito.length > 0 ? carrito.map(item => <div className='carro' key={item.id}> <img className='imagen' src={item.imagen} /><div className='data'>
                <br /><h2 className='camcarro' >{item.equipo}</h2><h5 className='camcarro'>cant: {item.valor}</h5> <h5 className='camcarro'>precio: ${item.precio}</h5></div><button className='btn' onClick={() => removeCarrito(item.id, item.valor, item.precio)} onSubmit={() => menos(item.valor)} >eliminar producto</button>
                <br></br>
                <br />

            </div>)

                : <div className='carroVacio'> <h4>Carrito vacío,</h4><Link className='li' to={'/product/'}>Comenzar compra</Link></div>
            }
            <br />
            <br />
            <br />
            <h1 className='total'>Precio total: ${total}</h1>
            <Link className='terminar' to={'/Comprar/'}>finalizar compra</Link></div>





    )

    // return (
    //     <div className='carrito'>
    //         <h1>Cart</h1>
    //         <div>
    //             Aqui apareceran los productos elegidos
    //         </div>
    //         {carrito.length > 0 ? carrito.map(item => <div key={item.id}> <h1></h1>
    //             <br /><h2 >{item.equipo}</h2><h5>cant: {item.valor}</h5> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id) && menos(item.precio)}>eliminar producto</button>
    //             <br></br>
    //             <br />

    //         </div>)

    //             : <Link to={'/product/'}>Comenza a comprar!</Link>
    //         }
    //         <br />
    //         <br />
    //         <br />
    //         <h1>{total}</h1>

    //         <Link to={'/Comprar/'}>finalizar compra</Link></div>

    // )
}

export default Cart



// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { AppContext } from '../app/Provider'

// const Cart = () => {
//     const { carrito } = useContext(AppContext)
//     const { total } = useContext(AppContext)
//     const { removeCarrito } = useContext(AppContext)
//     const { menos } = useContext(AppContext)


//     return (
//         <div>
//             <h1>Cart</h1>
//             <div>
//                 Aqui apareceran los productos elegidos
//             </div>
//             {carrito.length > 0 ? carrito.map(item => <div key={item.id}>
//                 <br /><h2 >{item.nombre}</h2> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id) && menos(item.precio)}>eliminar producto</button>
//                 <br></br>
//                 <br />

//             </div>)

//                 : <Link to={'/product/'}>Comenza a comprar!</Link>
//             }
//             <br />
//             <br />
//             <br />

//             <div>precio total= {total}
//                 <Link to={'/Comprar/'}>finalizar compra</Link></div>
//         </div>
//     )
// }

// export default Cart



// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { AppContext } from '../app/Provider'

// const Cart = () => {
//     const { carrito } = useContext(AppContext)

//     const { removeCarrito } = useContext(AppContext)


//     return (
//         <div>
//             <h1>Cart</h1>
//             <div>
//                 Aqui apareceran los productos elegidos
//             </div>
//             {carrito.length > 0 ? carrito.map(item => <div key={item.id}><br /><h2 >{item.nombre}</h2> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id)}>eliminar producto</button><h1> { carrito.lenght }</h1></div>) : <Link to={'/product/'}>Comenza a comprar!</Link>
//             }

//         </div >
//     )
// }

// export default Cart