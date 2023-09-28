const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.itemName}</h2>
      <p>{item.itemPrice}</p>
    </div>
  );
};

export default Item;
