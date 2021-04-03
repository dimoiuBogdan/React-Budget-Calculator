import React, { useState } from "react";
import "../index.css";

export default function AddExpense(props) {
  const { setTransactions, transactions } = props;
  const [newTransactionText, setNewTransactionText] = useState("");
  const [newTransactionAmount, setNewTransactionAmount] = useState(0);

  const changeTransactionText = (e) => {
    setNewTransactionText(e.target.value);
  };

  const changeTransactionAmount = (e) => {
    setNewTransactionAmount(e.target.value);
  };

  const addNewTransaction = () => {
    if (newTransactionAmount && newTransactionText)
      setTransactions([
        ...transactions,
        {
          text: newTransactionText,
          amount: newTransactionAmount,
        },
      ]);
    setNewTransactionAmount(0);
    setNewTransactionText("");
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-4 pb-3 border-b-2 border-gray-300">
        Add New Transaction
      </h2>
      <div className="px-8 flex justify-evenly items-center text-center">
        <div>
          <label htmlFor="text" className="text-xl block mb-2">
            Text
          </label>
          <input
            value={newTransactionText}
            type="text"
            placeholder="Enter Text ..."
            className="w-full py-1 bg-gray-50 bg-opacity-0 focus:outline-none border-b-2 border-opacity-50 border-gray-300"
            onChange={changeTransactionText}
          />
        </div>
        <div className="amount-label">
          <label htmlFor="text" className="text-xl block mb-2 relative">
            Amount
            <div className="text-md absolute left-full -top-full w-48 border-2 border-gray-300 bg-white dark:bg-gray-600 rounded-md p-2 opacity-0 transition-all duration-300">
              <div>
                <span className="text-red-400">Negative</span> - Expense
              </div>
              <div>
                <span className="text-green-400">Positive</span> - Income
              </div>
            </div>
          </label>
          <input
            value={newTransactionAmount ? newTransactionAmount : ""}
            type="number"
            placeholder="Money spent / earned"
            className="w-full py-1 bg-gray-50 bg-opacity-0 focus:outline-none border-b-2 border-opacity-50 border-gray-300"
            onChange={changeTransactionAmount}
          />
        </div>
      </div>
      <button
        onClick={addNewTransaction}
        className="mt-5 py-1 px-2 rounded-sm bg-yellow-500 text-gray-600 font-semibold mx-auto block focus:outline-none border-2 border-yellow-500 transition-all duration-300 hover:bg-opacity-0 hover:text-yellow-500"
      >
        Add Transaction
      </button>
    </div>
  );
}
