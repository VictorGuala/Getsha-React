import React from "react";

const Footer = () => {
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col-md-8">
            <a href="#"> FB</a>
            <a href="#">IG</a>                
            <a href="#">TW</a>
            <a href="#">Map</a> 
            </div>
            <div className="col-md-4 text-center">
            <span>Copyright &copy; Victor Guala - 2022</span>
            <p>Montevideo Uruguay</p>
            <p><a href="mailto:victorguala@gmail.com">victorguala@gmail.com</a> </p>     
            </div>
    </div>
    </div>
  );
};

export default Footer;
