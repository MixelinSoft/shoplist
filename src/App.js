import "./App.css";

import { useState } from "react";
import { v4 as idGenerator } from "uuid";

import ItemList from "./components/ItemList";
import ShopForm from "./components/ShopForm";
import SummaryInfo from "./components/SummaryIfo";

function App() {
  const [shopListDB, setShopListDB] = useState([]);

  const addItemHandler = (newItem) => {
    const newItemTemplate = {
      itemName: newItem.itemName,
      itemID: idGenerator(),
      itemPrice: newItem.itemPrice,
      isItemByed: false,
      itemVolume: {
        volume: 0,
        typeofVolume: "шт",
      },
    };

    setShopListDB([...shopListDB, newItemTemplate]);
  };

  console.dir(shopListDB);
  return (
    <div className="App">
      <h1>Список Покупок</h1>
      <ShopForm addItem={addItemHandler} />
      <ItemList shopList={shopListDB} />
      <SummaryInfo itemList={shopListDB} />
    </div>
  );
}

export default App;
