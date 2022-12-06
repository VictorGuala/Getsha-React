import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-info" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;