import { useState } from "react";

const ShopForm = ({ addItem }) => {
  const [itemName, changeItemName] = useState("");
  const [itemPrice, changeItemPrice] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newItem = {
          itemName,
          itemPrice,
        };

        if (
          newItem.itemName !== "" &&
          newItem &&
          newItem.itemPrice >= 0 &&
          newItem.itemPrice
        ) {
          addItem(newItem);
          changeItemName("");
          changeItemPrice("");
        }
      }}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => changeItemName(e.target.value)}></input>

      <input
        type="number"
        value={itemPrice}
        onChange={(e) => changeItemPrice(e.target.value)}
      />
      <button>Confirm</button>
    </form>
  );
};

export default ShopForm;
