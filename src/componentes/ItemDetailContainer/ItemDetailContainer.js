

import React from 'react'
import { useEffect, useState } from 'react';
import { getItem } from '../../api';
import ItemCount from '../ItemListContainer/ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [detalles, setDetalle] = useState({});

    useEffect(() => {
        getItem().then((detalles) => {
            setDetalle(detalles)
        })
    }, [])

    return (
        
        <ItemDetail detalle={detalles} />
        
    )
}
export default ItemDetailContainer;