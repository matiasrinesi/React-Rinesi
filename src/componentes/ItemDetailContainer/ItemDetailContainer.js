import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItem } from '../../api';

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