import "./styles.css";
import { useState } from "react";
export default function App() {
  let arr1 = [
    {
      id: 1,
      quantity: 4
    },
    {
      id: 2,
      quantity: 5
    },
    {
      id: 3,
      quantity: 9
    }
  ];

  const [quantity, setQuantity] = useState(arr1);

  //console.log(quantity);
  const handleChange = (e, itemId) => {
    console.log(e.target.value, itemId + "dhhdsj");
    const newArr = [...arr1];
    let singleItem = newArr.find((item) => item.id === itemId);
    singleItem.quantity = e.target.value;
    console.log(newArr);
    setQuantity(newArr);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2>
      {quantity.map((item) => (
        <input
          key={item.id}
          value={item.quantity}
          onChange={(e) => handleChange(e, item.id)}
        />
      ))}
    </div>
  );
}
