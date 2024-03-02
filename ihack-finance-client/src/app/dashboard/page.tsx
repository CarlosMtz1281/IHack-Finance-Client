"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "../style/dashboard.css";

import Transaction from "../components/transactions";

const transactions = [
  {
    amount: 1000,
    cost: 10,
    name: "Transaction 1",
    category: "1",
    date: new Date(),
  },
  {
    amount: 2000,
    cost: 20,
    name: "Transaction 2",
    category: "2",
    date: new Date(),
  },
  {
    amount: 3000,
    cost: 30,
    name: "Transaction 3",
    category: "3",
    date: new Date(),
  },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboardWrap">
      <h1 className="dashboardMainTittle">Bienvenido Carlos</h1>
      {/* Add your dashboard components and content here */}
      <div className="graphSection">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Comida" },
                { id: 1, value: 15, label: "Entretenimiento" },
                { id: 2, value: 20, label: "Productividad" },
              ],
              cx: 120,
              innerRadius: 10,
              paddingAngle: 2,
              cornerRadius: 5,
            },
          ]}
          height={200}
        />
      </div>
      <div className="expensesSection">
        <h2 className="expenssesTittle">Ultimas Transacciones</h2>

        <div className="transactionContainer">
          {/* COMPONENT */}
          {transactions.map((transaction, index) => (
            <Transaction
              key={index}
              name={transaction.name}
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
