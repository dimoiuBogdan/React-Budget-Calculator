import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";

export default function Expense(props) {
  const { amount, text, id, transactions, setTransactions } = props;
  const [displayPopup, setDisplayPopup] = useState(true);

  const toggleDisplayPopup = () => {};

  return (
    <div
      onClick={toggleDisplayPopup}
      className="mt-6 relative flex justify-between items-center shadow-xl py-1 px-4 rounded-md border-2 border-gray-500 cursor-pointer"
    >
      <h3 className="text-xl">{text}</h3>
      <h3
        className={`text-xl ${amount < 0 ? "text-red-400" : "text-green-400"}`}
      >
        {amount > 0 ? "+" : null}
        {amount}
      </h3>
      <ConfirmationPopup />
    </div>
  );
}

/*    setTransactions(
      transactions.filter((clickedTransaction) => {
        return clickedTransaction.id === id;
      })
    ); */
