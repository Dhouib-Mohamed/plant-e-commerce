import React from "react";
import { plantList } from "../datas/plantList.js";
import PlantItem from "./PlantItem.jsx";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [categories, setCategories] = useState("");
  function reset() {
    setCategories("");
  }
  let cat = Array.from(plantList,(plant)=>plant.category)
  cat = Array.from(new Set(cat))
  return (
    <><div className="container row">
      <div className="col">
        <select className="form-select form-select-lg" name="categories" value={categories} onChange={(e) => setCategories(e.target.value)}>
          <option value="">---</option>
          {cat.map((category, index) => (
            <option value={category} key={index}>{category}</option>
          ))}
        </select>
      </div>
      <div className="col"><button className="btn btn-light col-3" onClick={reset}>Reset</button></div>
    </div><div id="shopping">
        {plantList.map((plant) => (
          categories === "" || categories === plant.category ? (<PlantItem
            cart={cart}
            updateCart={updateCart}
            key={plant.id}
            id={plant.id}
            price={plant.price}
            name={plant.name}
            cover={plant.cover}
            category={plant.category}
            isSpecialOffer={plant.isSpecialOffer}
            water={plant.water}
            light={plant.light} />) : null
        ))}
      </div></>
  );
}

export default ShoppingList;
