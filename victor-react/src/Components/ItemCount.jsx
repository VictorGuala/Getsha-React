import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [sell , setSell]=useState(false);

    const oneMore = () => {

        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }
    const oneLess = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    const addToCart = (quantity)=>{
        if (counter <= itemStock){
            setCounter(1);
            setItemStock(itemStock-quantity);
            setSell(true);
            onAdd(quantity);
        }
    }
    useEffect(()=> {
        setItemStock(stock);
    },[stock])
    return (
        <div>
            <div className="row mb-2">
                <div className="col-md-5 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={oneLess}  >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={oneMore}  >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 text-center">
                    {sell ? <Link to={"/cart"}className="btn btn-outline-primary">Terminar mi compra</Link>:<button type="button" className="btn btn-outline-primary" onClick= {()=>{addToCart(counter)}} >Agregar al Canasto</button>} 
                </div>
            </div>

        </div>
    )
}
export default ItemCount;