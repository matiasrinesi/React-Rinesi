import React from 'react'
import Item from './Item'

const ItemList = ({camisetasList}) => {
  
  
    return (
    <div>
        {camisetasList.map((camisetas) => <Item key={camisetas.id} {...camisetas}/>)}
    </div>
  )
}

export default ItemList