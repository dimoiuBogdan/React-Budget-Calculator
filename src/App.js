import React, { useState, useEffect } from "react";
import AddExpense from "./COMPONENTS/AddExpense";
import BalanceDetails from "./COMPONENTS/BalanceDetails";
import DarkModeToggler from "./COMPONENTS/DarkModeToggler";
import History from "./COMPONENTS/History";

export default function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    recalculateBalance();
  }, [transactions]);

  const recalculateBalance = () => {
    let total = 0,
      totalIncome = 0,
      totalExpense = 0;
    transactions.forEach((transaction) => {
      total += +transaction.amount;
      transaction.amount > 0
        ? (totalIncome += +transaction.amount)
        : (totalExpense += +transaction.amount);
    });
    setTotalBalance(total);
    setIncome(totalIncome);
    setExpense(totalExpense);
  };

  return (
    <div className="min-h-screen max-w-screen flex justify-center dark:bg-gray-600">
      <DarkModeToggler />
      <div className="container w-1/3 dark:text-white pt-10">
        <h2 className="text-5xl mb-12 text-center">Expense Tracker</h2>
        <BalanceDetails
          totalBalance={totalBalance}
          income={income}
          expense={expense}
        />
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
