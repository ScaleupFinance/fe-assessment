import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/exercise5/CurrencyCalculator.module.css";
import ShowAmount from "./ShowAmount";

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Record<string, string>>(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      setCurrencies(response.data);
    };

    fetchData();
  }, []);

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleCurrencyFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrencyFrom(event.target.value);
  };

  const handleCurrencyTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrencyTo(event.target.value);
  };

  if (!currencies) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <input
        type="number"
        value={amount}
        className={styles.input}
        onChange={handleAmount}
      />

      <select
        value={currencyFrom}
        className={styles.input}
        onChange={handleCurrencyFrom}
      >
        <option>---select currency---</option>
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currencies[currency]}
          </option>
        ))}
      </select>

      <select
        value={currencyTo}
        className={styles.input}
        onChange={handleCurrencyTo}
      >
        <option>---select currency---</option>
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currencies[currency]}
          </option>
        ))}
      </select>

      {amount && currencyFrom && currencyTo && (
        <ShowAmount
          amount={parseFloat(amount)}
          currencyFrom={currencyFrom}
          currencyTo={currencyTo}
          className={styles.input}
        />
      )}
    </>
  );
};

export default CurrencyCalculator;
