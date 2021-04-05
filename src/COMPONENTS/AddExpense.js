import React, { useState } from "react";

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
    if (newTransactionAmount && newTransactionText) {
      setTransactions([
        {
          text: newTransactionText,
          amount: newTransactionAmount,
        },
        ...transactions,
      ]);
      setNewTransactionAmount(0);
      setNewTransactionText("");
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-4 pb-3 border-b-2 border-gray-300">
        Add New Transaction
      </h2>
      <div className="px-0 flex justify-evenly items-center text-center flex-row">
        <div className="pr-2">
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
        <div className="amount-label pl-2">
          <label htmlFor="text" className="text-xl block mb-2 relative">
            Amount
          </label>
          <input
            value={newTransactionAmount ? newTransactionAmount : ""}
            type="number"
            placeholder="Enter Price ..."
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
