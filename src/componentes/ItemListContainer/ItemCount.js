import React from 'react'

const ItemCount = ({ stock, inicio, onAdd }) => {


    const [valor, setValor] = React.useState(0);
    return (
        <div>

            <div className='masomenos'>
                <button className='contando' onClick={() => {
                    inicio = 0
                    setValor(valor - 1)

                }} disabled={valor < 1}>-</button>
                <p className='numero'>{valor}</p>
                <button className='contando' onClick={() => {
                    setValor(valor + 1)
                }} disabled={valor > stock - 1}>+</button>

            </div >
            <button type="añadir" onClick={() => { onAdd(valor) }}>
                Añadir al carrito
            </button>
        </div >
    )
}

export default ItemCount


// import React from 'react'

// const Contador = ({ stock, inicio }) => {


//     const [valor, setValor] = React.useState(0);
//     return (
//         <div>

//             <div className='stock'>
//                 <button className='sumar' onClick={() => {
//                     inicio = 0
//                     setValor(valor - 1)

//                 }} disabled={valor < 1}>-</button>
//                 <p className='hola'>{valor}</p>
//                 <button className='sumar' onClick={() => {
//                     setValor(valor + 1)
//                 }} disabled={valor > stock - 1}>+</button>

//             </div >

//         </div >
//     )
// }

// export default Contador



// import { useState } from 'react'


// const ItemCount = ({stock, initial, onAdd}) => {
  
//     const [valor, setValor] = useState(initial);
//     const increment = () => {
//         setValor(actualValor => actualValor +1)
//     }
//     const decrement = () => {
//         setValor(actualValor => actualValor -1)
//     }
   
   
//     return (
  
//  <div className='divcarro'>
 
  
   
//      <div className='masomenos'>
//       <button  className='sumar' onClick={decrement} disabled = {valor<1}>-</button>

//    <p className='value'>{valor}</p> 
//         <button className='sumar' onClick={increment} disabled={valor>=stock}>+</button> 
// </div>
//       <button className='addcarrito' onClick = {() => onAdd(valor)}>Añadir al carrito</button>
//     </div>
//   )
// }

// export default ItemCount