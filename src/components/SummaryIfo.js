const SummaryInfo = ({ itemList }) => {
  let sum = 0;
  itemList.forEach((element) => {
    sum += +element.itemPrice;
  });
  return (
    <div>
      <p>Сумма:{sum}</p>
    </div>
  );
};

export default SummaryInfo;
