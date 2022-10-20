import React, { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from '../app/firebase'
import { AppContext } from '../app/Provider'


const Comprar = () => {
    const { numero } = useContext(AppContext)
    const { carrito } = useContext(AppContext)
    const { total } = useContext(AppContext)
    const cart = carrito.map(item => ({ key: item.id, nombre: item.equipo, precio: item.precio }))
    const [orders, setOrders] = useState({
        nombre: '',
        telefono: '',
        email: '',
        total: total,
        date: new Date(),
        items: cart

    })
    const hola = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, orders)
            .then(({ id }) => alert(`compra finalizada, su id de compra es:${(id)}`))
    }


    return (
        <div>

            <form className='comprar' onSubmit={hola}>
                <h1 className='datos'>¡Dejanos tus datos!</h1>
                <label className='label' >Nombre y apellido</label>
                <input type="text" value={orders.nombre} onChange={(e) => { setOrders({ ...orders, nombre: e.target.value }) }} />
                <label className='label'>Email</label>
                <input type="text" value={orders.email} onChange={(e) => { setOrders({ ...orders, email: e.target.value }) }} />
                <label className='label'> Telefono</label>
                <input type="number" value={orders.telefono} onChange={(e) => { setOrders({ ...orders, telefono: e.target.value }) }} />
                <h2 className='preciotot'>precio total: ${total}</h2>
               
                <button className='fincompra'>comprar</button>
            </form>
            

        </div>
    )
}

export default Comprar