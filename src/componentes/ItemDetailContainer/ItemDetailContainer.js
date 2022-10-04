import React from 'react'
import { useEffect, useState } from 'react';
import { getItemById } from '../../app/firebaseapi';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

        const { id } = useParams()
        const [item, setItem] = useState({})
        useEffect(() => {
            getItemById(id).then(item => setItem(item))
        }, [id])
    
        return (
            <div className='contenedorItemDetail'>
                <ItemDetail products={item} />
            </div>
        )
    
       
    }
    export default ItemDetailContainer;
   