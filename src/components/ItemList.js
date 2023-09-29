import styles from "./ItemsList.module.css";
import Item from "./Item";

const ItemList = ({ shopList }) => {
  return (
    <div className={styles.itemsList}>
      {shopList.map((item) => {
        return <Item item={item} key={item.itemID} />;
      })}
    </div>
  );
};

export default ItemList;
