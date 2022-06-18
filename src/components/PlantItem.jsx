import CareScale from "./CareScale";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/item.css";

function quantity(number) {
  if (number === 1) {
    return "small";
  }
  if (number === 2) {
    return "moderate";
  }
  if (number >= 3) {
    return "large";
  }
}

function itemClick(plant) {
  alert(
    ` This plant is named ${plant.name}\n It is an interesting ${
      plant.category
    } plant ${
      plant.isSpecialOffer?
      " that is very exotic":
      ""
    }\n This plant need ${quantity(
      plant.water
    )} amounts of water and ${quantity(plant.light)} amounts of light`
  );
}
function addToCart(e,id,cart,updateCart) {
    e.stopPropagation()
    let c = [...cart]
    const result=c.findIndex((element)=>element[0]===id)
    if(result!==-1) {
        c[result][1] ++
    }
    else{
        c.push([id,1])
        console.log(c)
    }
    updateCart(c);

}
function PlantItem(plant) {
  return (
    <div className="card mb-3 item" onClick={() => itemClick(plant)}>
      <div className="row g-0">
        <div className="col-3 b">
          <img src={plant.cover} className="img" alt="plant" />
        </div>
        <div className="col">
          <div className="card-body content">
            <div className="card-title">
              {plant.name} - {plant.category}{" "}
              {plant.isSpecialOffer ? "👌" : "😒"}
            </div>
            <div className="card-title">PRICE : {plant.price} DT</div>
            <div className="row">
              <div className="card-text col">
                <CareScale careType="water" scaleValue={plant.water} />
                <CareScale careType="light" scaleValue={plant.light} />
              </div>
              <div className="col">
                <button onClick={(e)=>addToCart(e,plant.id,plant.cart,plant.updateCart)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantItem;
