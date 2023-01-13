import React, { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./Context/CartContex";

const ItemDetail = ({ item }) => {
    const {addItem}= useContext (CartContext);
    const [itemStock, setItemStock]= useState(0);
    const onAdd =(quantity) =>{
        setItemStock(itemStock-quantity);
        addItem(item,quantity);
        
    }
    useEffect(()=> {
        setItemStock(item.stock);
    },[item]);

    return (
        <div className="row ">
            <div className="col-md-4 offset-1">
                <img src={item.image} alt={item.name} className="img-fluid small-image" />
            </div>
            <div className="col-md-6">
                <h1>{item.name}</h1>
                <h4><b>Precio {item.price}$ </b></h4>
                <p className="small-text mb-5 badge bg-info text-wrap break-word " >{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}
export default ItemDetail;