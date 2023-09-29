import styles from "./Item.module.css";
const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemName}>
        <p>{item.itemName}</p>
      </div>

      <p>{item.itemPrice}</p>
    </div>
  );
};

export default Item;
