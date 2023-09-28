import Item from "./Item";

const ItemList = ({ shopList }) => {
  return (
    <div>
      {shopList.map((item) => {
        return <Item item={item} key={item.itemID} />;
      })}
    </div>
  );
};

export default ItemList;
