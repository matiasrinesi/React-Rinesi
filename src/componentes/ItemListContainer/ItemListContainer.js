import React, { useEffect, useState} from 'react';
import camisetas from '../../data/data'
import ItemList from './ItemList';

// const ItemListContainer = ({Camisetas}) => {

//   return (
//    <h1>Bienvenido a Shirtmuseum, tenemos en stock {Camisetas} Camisetas</h1>
   
 
 
//    )
// }

const ItemListContainer = () => {
  const getCamisetas = (confirmacion) => new Promise ((res, err) =>{
    setTimeout(()=>{
      if(confirmacion){
        res(camisetas)
      }else{
        err("Acceso rechazado")
      }
    }, 2000)
  })
  
  const[camisetasList, setCamisetasList] = useState()
    useEffect(()=>{
      getCamisetas(true).then(camisetasList => setCamisetasList(camisetasList))
    }, [])

    return (
      <div>
        <h1>Shirtmuseum</h1>
        <div>
          {camisetasList && <ItemList camisetasList={camisetasList} />}
        </div>
      </div>
    )
}

export default ItemListContainer