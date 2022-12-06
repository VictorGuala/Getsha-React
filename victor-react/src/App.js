import React from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Promocion from "./Components/Promocion"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Espacio Getsha"} />
      <Banner/>
      <Promocion/>
      <Footer/>
    </div>
  )
}

export default App;
