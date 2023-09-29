import styles from "./SummaryInfo.module.css";

const SummaryInfo = ({ itemList }) => {
  let sum = 0;
  itemList.forEach((element) => {
    sum += +element.itemPrice;
  });
  return (
    sum > 0 && (
      <div className={styles.summaryContainer}>
        <p>Сумма: {sum} uah</p>
      </div>
    )
  );
};

export default SummaryInfo;
