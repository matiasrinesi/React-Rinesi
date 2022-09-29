

import React from 'react'
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <div>
            <button className="botonCarrito">
                <Link to={"/Cart"} ><img className='carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" width={40} alt="" />
                </Link>


            </button>
        </div>
    );
}

export default CartWidget;