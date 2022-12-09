import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const[ItemsInCart, updateCart] = useState([]);
  const[CartTotal,updateTotal] = useState(0);

  function Click(item) {
    updateTotal(CartTotal + item.price)
    updateCart([...ItemsInCart, item])
  }
  

  return (
    <div className="App">

      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} Click={Click} />
      ))}
      </div>

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {ItemsInCart.map((item) => <p> {item.name} : ${item.price} </p>)}
        <h4> Total :  ${CartTotal} </h4>
      </div>
    </div>
  );
}

export default App;

