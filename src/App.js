import React, { useState } from "react";
import AddExpense from "./COMPONENTS/AddExpense";
import BalanceDetails from "./COMPONENTS/BalanceDetails";
import DarkModeToggler from "./COMPONENTS/DarkModeToggler";
import History from "./COMPONENTS/History";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  return (
    <div className="min-h-screen w-screen flex justify-center dark:bg-gray-600">
      <DarkModeToggler />
      <div className="container w-1/3 dark:text-white pt-10">
        <h2 className="text-5xl mb-12 text-center">Expense Tracker</h2>
        <BalanceDetails />
        <AddExpense
          setTransactions={setTransactions}
          transactions={transactions}
        />
        <History
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
}
