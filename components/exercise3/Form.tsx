// QUESTION: What is the difference between throttle and debounce and which one should we use here?
// import throttle from "lodash.throttle";
// usage: throttle(callback, wait)
// import debounce from "lodash.debounce";
// usage: debounce(callback, wait)
import { useState } from "react";
import styles from "../../styles/exercise3/Form.module.css";

const Form = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div>
      <label className={styles.label}>Give a number:</label>
      <input
        type="number"
        min="0"
        step="1"
        className={styles.number}
        onChange={handleChange}
      />
      <span className={styles.label}>Square root of your number is</span>
      <div className={styles.number}>{Math.sqrt(value)}</div>
    </div>
  );
};

export default Form;
