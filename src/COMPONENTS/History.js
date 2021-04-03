import React from "react";
import Expense from "./Expense";

export default function History(props) {
  const { transactions, setTransactions } = props;
  return (
    <div>
      <h2 className="text-2xl pb-2 border-b-2 border-gray-300">History</h2>
      <div className="px-8">
        {transactions.map((transaction, index) => (
          <Expense
            text={transaction.text}
            amount={transaction.amount}
            id={index}
            key={index}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))}
      </div>
    </div>
  );
}
