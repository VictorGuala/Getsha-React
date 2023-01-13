import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContex";
const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);

  return (
    <Link to={"/cart"} className="btn btn-info position-relative">
      <img src="images/basket.svg" alt="Carrito" width="40" height="80" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cartTotal()} </span>
    </Link>
  );
};


export default CartWidget;