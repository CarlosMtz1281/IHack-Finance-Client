import React from 'react';

interface TransactionProps {
    name: string;
    amount: number;
    category: string;
    date: Date;
}

const Transaction: React.FC<TransactionProps> = ({ name, amount, category, date }) => {
    return (
        <div className="transaction-box">
            <div className="transaction-name">{name}</div>
            <div className="transaction-amount">${amount}</div>
            <div className="transaction-category">{category}</div>
            <div className="transaction-date">{date.toDateString()}</div>
        </div>
    );
};

export default Transaction;
