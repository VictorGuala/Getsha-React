import React from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemListContainer from "./Components/ItemListContainer";
import Promocion from "./Components/Promocion"

function App() {
  return (
    <div>
      <Header/>
      <ItemListContainer/>
      <Banner/>
      <Promocion/>
      <Footer/>
    </div>
  )
}

export default App;
