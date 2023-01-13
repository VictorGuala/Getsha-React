import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Promocion from "./Components/Promocion";
import Error404 from "./Components/Error404";
import CartContextProvider from "./Components/Context/CartContex";
import Cart from "./Components/Cart";
function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Promocion />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
