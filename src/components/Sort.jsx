import { useState } from "react";
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/sort.css'
import { useEffect } from "react";

function Sort(props) {
  const [sort, updatesort] = useState(false);
  useEffect(()=>{
    document.querySelectorAll(".category").forEach(element => {
        console.log(element.textContent);
        if(props.categories.findIndex((item)=>item===element.textContent)!==-1) {
            element.classList.add("selected")
            element.classList.remove("unselected")
        }
        else {
            element.classList.add("unselected")
            element.classList.remove("selected")
        }
    });
  },[props.categories])
  function reset() {
    props.updateCategories([]);
    props.updatePrice(props.initialPrices());
  }

function select(e,category) {
    let categories=[...props.categories]
    if (e.target.classList.contains("selected")) {
        const i =categories.findIndex((item)=>item===category)
        categories.splice(i,1)
    }
    else {
        categories.push(category)
    }
    props.updateCategories(categories)
    console.log(props.categories);
}
  return (
    <>
      <div className="container" id="sort">
        <div id="opener"
        onClick={() => {
            updatesort(!sort);
        }}>
        <h4>Sort By</h4>
        {sort ? (
          <div>
            △
          </div>
        ) : (
          <div>
            ▽
          </div>
        )}
      </div>
      {sort && (
        <div id="sorting">
          <div className="sorter">
              <label htmlFor="categories">Categories :</label>
              <div name="categories">
                {props.cat.map((category) =>
                  (<div onClick={(e)=>select(e,category)} className="category unselected">{category}</div>)
                )}
              </div>
          </div>
          <div className="sorter">
              <label htmlFor="price" id="range">Price :</label>
              <InputRange
                maxValue={props.initialPrices().max}
                minValue={props.initialPrices().min}
                value={props.price}
                onChange={(value) => {props.updatePrice(value)}}
              />
            </div>
            <div><button className="btn btn-light" id="reset" onClick={reset}>Reset</button></div>
        </div>
      )}
      </div>
    </>
  );
}
export default Sort;
