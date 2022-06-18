import { useEffect } from "react";
import { plantList } from "../datas/plantList";

function Cart({ cart, updateCart }) {
  function removeFromCart(id) {
    let c = [...cart];
    const result = c.findIndex((element) => element[0] === id);
    c[result][1]--;
    console.log(c[result][1]);
    if (c[result][1] === 0) {
      c.splice(result, 1);
    }
    updateCart(c);
  }
  useEffect(()=>{alert(`You have just changed the elements of your cart\nYou now have ${total()} DT to pay 💸`)},[total])
  function total() {
    return cart.reduce((total, plant) => {
      return (total +=
        plantList.find((element) => plant[0] === element.id).price * plant[1]);
    }, 0);
  }
  return (
    <div>
      <h2>Cart</h2>
      {cart.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Plant Name</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(([key, value]) => {
              const p = plantList.find((plant) => plant.id === key);
              return (
                <tr key={key}>
                  <td>{p.name}</td>
                  <td>{value}</td>
                  <td>
                    <button onClick={() => removeFromCart(key)}>remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h4>No elements in cart</h4>
      )}
      <h5>Total : {total()} DT</h5>
    </div>
  );
}

export default Cart;
