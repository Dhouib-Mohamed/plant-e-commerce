import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import "../styles/component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <>
      <Banner />
      <div className="row g-0 component">
        <div className="col-3" id="cart">
          <Cart cart={cart} updateCart={updateCart} />
        </div>
        <div className="col-9" id="shopping">
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </div>
      <Form />
    </>
  );
}
export default App;
