import axios from "axios";
import { useEffect, useState } from "react";

interface ShowAmountProps {
  amount: number;
  currencyFrom: string;
  currencyTo: string;
  className?: string;
}

const ShowAmount = ({
  amount,
  currencyFrom,
  currencyTo,
  className,
}: ShowAmountProps) => {
  const [convertedAmount, setConvertedAmount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`
      );
      /*
      The result from API call is something like:
      {
          "date": "2022-08-16",
          "usd": 1.015177
      }
      */
      setConvertedAmount(response.data[currencyTo]);
    };

    fetchData();
  }, [currencyFrom, currencyTo]);

  if (!convertedAmount) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <span>
        {amount} {currencyFrom} in {currencyTo}:
      </span>
      <p className={className}>{amount * convertedAmount}</p>
    </>
  );
};

export default ShowAmount;
