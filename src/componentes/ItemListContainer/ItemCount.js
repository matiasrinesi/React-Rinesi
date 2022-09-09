import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
  
    const [valor, setValor] = useState(initial);
    const increment = () => {
        setValor(actualValor => actualValor +1)
    }
    const decrement = () => {
        setValor(actualValor => actualValor -1)
    }
   
   
    return (
  
 <div className='divcarro'>
 
  
   
     <div className='masomenos'>
      <button  className='sumar' onClick={decrement} disabled = {valor<1}>-</button>

   <p className='value'>{valor}</p> 
        <button className='sumar' onClick={increment} disabled={valor>stock}>+</button> 
</div>
      <button className='addcarrito' onClick = {() => onAdd(valor)}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount