import React from "react";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center shadow">
                    <img src="images/cosmetica1.jpeg" className="img-fluid" alt="Cosmetica Natural" height="400" width="400" />
                    <p>Aceites y Lociones 100% NATURALES!!!!!!!!!!!!</p>
                    <p><a href="#" target={"_blank"} className="btn btn-info"> Ver Mas</a></p>
                </div>
                <div className="col-md-6 text-center shadow">
                    <img src="images/cosmetica2.jpeg" className="img-fluid" alt="Cosmetica Natural" height="400" width="400" />
                    <p>Cremas y Jabones 100% NATURALES!!!!!!!!!!!!</p>
                    <p><a href="#" target={"_blank"} className="btn btn-info"> Ver Mas</a></p>
                </div>
            </div>

        </div>
    )
}

export default Banner;