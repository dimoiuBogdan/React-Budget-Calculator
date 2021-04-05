import React from "react";

export default function ConfirmationPopup(props) {
  const {
    setTransactions,
    transactions,
    id,
    setDisplayPopup,
    clickedExpenseDetails,
  } = props;

  const deleteTransaction = () => {
    setTransactions(
      transactions.filter(
        (clickedElement) => transactions.indexOf(clickedElement) !== id
      )
    );
    setDisplayPopup(false);
  };

  return (
    <div>
      <div
        className="top-0 left-0 bg-black bg-opacity-30 w-screen h-screen fixed flex items-center justify-center flex-col"
        onClick={() => setDisplayPopup(false)}
      ></div>
      <div className="p-3 w-11/12 sm:w-max text-center bg-white dark:bg-gray-600 border-2 rounded-md border-gray-400 z-10 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h3 className="text-xl mb-2">
          Delete {clickedExpenseDetails.amount < 0 ? "Expense" : "Income"} "
          {clickedExpenseDetails.text}" Worth "
          {clickedExpenseDetails.amount > 0 ? "+" : null}
          {clickedExpenseDetails.amount}$" ?
        </h3>
        <div>
          <button
            className="px-4 bg-opacity-0 text-green-400 mx-1 text-xl font-semibold focus:outline-none"
            onClick={deleteTransaction}
          >
            Yes
          </button>
          <button
            className="py-1 px-2 mx-1 text-xl text-red-400 focus:outline-none"
            onClick={() => setDisplayPopup(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
