import React from 'react'


const ItemCount = ({Camisetas, initial, onAdd}) => {
  
    const [valor, setValor] = React.useState(0);
    return (
  
 <div className='divcarro'>
 
  
   
     <div className='masomenos'>
      <button  className='sumar' onClick={() => {
    initial = 0
    setValor(valor - 1)
    valor > initial ? setValor(valor - 1) : setValor(initial)
    }}>-</button> 

   <p className='value'>{valor}</p> 
        <button className='sumar' onClick={() => {
     valor < Camisetas ? setValor(valor + 1) : setValor(Camisetas)
    }}>+</button> 
</div>
      <button className='addcarrito' onClick = {() => onAdd(valor)}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount