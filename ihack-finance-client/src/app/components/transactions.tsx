import React from "react";

import "../style/components/transactions.css";

interface TransactionProps {
  name: string;
  amount: number;
  category: string;
  date: Date;
}

const Transaction: React.FC<TransactionProps> = ({
  name,
  amount,
  category,
  date,
}) => {
  return (
    <div className="transaction-box">
    <div className={`transaction-category ${category === '1' ? 'red' : category === '2' ? 'yellow' : category === '3' ? 'blue' : ''}`}>

    </div>
      <div className="headerLeft">
        <div className="transaction-name">{name}</div>
        <div className="transaction-date">{date.toDateString()}</div>
      </div>
      <div className="transaction-amount">${amount}</div>
    </div>
  );
};

export default Transaction;
