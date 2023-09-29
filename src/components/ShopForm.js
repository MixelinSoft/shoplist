import styles from "./ShopForm.module.css";
import { useState } from "react";

const ShopForm = ({ addItem }) => {
  const [itemName, changeItemName] = useState("");
  const [itemPrice, changeItemPrice] = useState("");

  return (
    <form
      className={styles.form}
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
        className={styles.inputText}
        type="text"
        value={itemName}
        placeholder="Enter Product Name"
        onChange={(e) => changeItemName(e.target.value)}></input>

      <input
        className={styles.inputText}
        type="number"
        value={itemPrice}
        placeholder="Enter Product Price"
        onChange={(e) => changeItemPrice(e.target.value)}
      />
      <button className={styles.addButton}>Confirm</button>
    </form>
  );
};

export default ShopForm;
