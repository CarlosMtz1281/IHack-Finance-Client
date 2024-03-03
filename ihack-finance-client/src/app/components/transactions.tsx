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

  const categoryColors = {
    "Entretenimiento": "#6300a5",
    "Transporte": "#FF5733",
    "Varios": "#C70039",
    "Basicos": "#00a400",
    "Restaurante": "#ffd300"
  };

  return (
    <div className="transaction-box">
      <div className="transaction-category" style={{backgroundColor: categoryColors[category]}}>    </div>
      <div className="headerLeft">
        <div className="transaction-name">{name}</div>
        <div className="transaction-date">
          {new Date(date).toLocaleDateString('en-GB')}
               </div>
            </div>
      <div className="transaction-amount">${amount}</div>
    </div>
  );
};

export default Transaction;
