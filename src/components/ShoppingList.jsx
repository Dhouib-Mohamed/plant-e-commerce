import { plantList } from "../datas/plantList.js";
import PlantItem from "./PlantItem.jsx";
import { useState } from "react";
import Sort from './Sort'
import { useEffect } from "react";

function ShoppingList({ cart, updateCart }) {
  function initialPrices() {
    let max = plantList[0].price;
    let min = plantList[0].price;
    plantList.forEach((element) => {
      if (element.price > max) {
        max = element.price;
      }
      if (element.price < min) {
        max = element.price;
      }
    });
    return {min:min,max:max};
  }
  const [categories, updateCategories] = useState([]);
  const [price, updatePrice] = useState(initialPrices());
  let cat = Array.from(plantList, (plant) => plant.category);
  cat = Array.from(new Set(cat));
  useEffect(()=>{console.log(categories);})
  return (
    <>
      <Sort categories={categories} updateCategories= {updateCategories} price={price} updatePrice={updatePrice} cat ={cat} initialPrices={initialPrices}/>
      <div id="shopping">
        {plantList.map((plant) =>
          ((categories.length === 0 || categories.findIndex((item)=>item===plant.category)!== -1) && plant.price<=price.max&& plant.price>=price.min) ? (
            <PlantItem
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
              light={plant.light}
            />
          ) : null
        )}
      </div>
    </>
  );
}

export default ShoppingList;
