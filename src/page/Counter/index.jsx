import { useState } from "react";
import "./Counter.module.scss";
import styles from "./Counter.module.scss";
function Counter() {
  const [couter, setCouter] = useState(0);

  const handleAdd = () => {
    setCouter(couter + 1);
  };
  const handleReduce = () => {
    setCouter(couter - 1);
  };
  const handleReset = () => {
    setCouter(0);
  };
  return (
    <div className={styles.counter}>
      <div className={styles.wapper}>
        <div className={styles.container}>
          <div
            className={
              couter > 0
                ? styles.positive
                : couter < 0
                ? styles.negative
                : styles.zero
            }
          >
            <p>{couter}</p>
            <p>
              {couter > 0 ? "Số dương" : couter < 0 ? "Số âm" : "Bằng không"}
            </p>
          </div>
          <div className={styles.btn}>
            <button onClick={handleReduce}>-</button>
            <button onClick={handleReset}>
              <i className="fa-solid fa-rotate-right"></i>
            </button>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
