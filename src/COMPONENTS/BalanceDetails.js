import React from "react";

export default function BalanceDetails(props) {
  const { income, expense, totalBalance } = props;

  return (
    <div>
      <h3 className="text-2xl">Your Balance</h3>
      <h2 className="text-4xl font-semibold mb-7">${totalBalance}</h2>
      <div className="flex items-center justify-evenly shadow-xl border-2 border-gray-500 py-4 rounded-md dark:bg-gray-600 mb-10">
        <div className="text-center w-1/2 border-r-2 border-gray-500">
          <h4 className="text-2xl text-green-500">INCOME</h4>
          <h3 className="text-2xl">+{income}$</h3>
        </div>
        <div className="text-center w-1/2">
          <h4 className="text-red-400 text-2xl">EXPENSE</h4>
          <h3 className="text-2xl">{expense ? expense : "-0"}$</h3>
        </div>
      </div>
    </div>
  );
}
