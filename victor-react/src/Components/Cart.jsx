import React, { useContext } from "react";
import { CartContext } from "./Context/CartContex"

const Cart =()=> {
    const {cart , cartTotal} = useContext(CartContext);
    console.log(cart);
    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-info" role="alert" >No Hay Productos o Cursos  en el carrito

                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
            </div>
        </div>
    )
}
export default Cart;