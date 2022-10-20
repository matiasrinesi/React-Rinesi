
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../app/Provider';
function CartWidget() {
    const { carrito } = useContext(AppContext)

    return (
        <div>
            <button className="botonCarrito">
                <Link to={"/Cart"} ><img className='carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" width={40} alt="" />
                </Link> <h5 style={{ backgroundColor: 'white' }} >{carrito.length}</h5>
            </button>

        </div>
    );
}

export default CartWidget;
// import React from 'react'
// import { Link } from 'react-router-dom';

// function CartWidget() {
//     return (
//         <div>
//             <button className="botonCarrito">
//                 <Link to={"/Cart"} ><img className='carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" width={40} alt="" />
//                 </Link>


//             </button>
//         </div>
//     );
// }

// export default CartWidget;