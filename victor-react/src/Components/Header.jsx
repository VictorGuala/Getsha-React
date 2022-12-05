import React from "react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget"
const Header = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <NavBar/>
                </div>
                <div className="col-md-4 d-flex aling-item-center justify-content-end mt-3 mb-3">
                    <CartWidget/>
                </div>
            </div>
       </div>
    )
}

export default Header;