"use client";
import React, { use, useEffect } from "react";
import Link from "next/link";
import { PieChart } from "@mui/x-charts/PieChart";
import "../style/dashboard.css";
import Header from "../components/Header/Header";
import { useState } from "react";

import Transaction from "../components/transactions";

const transactions = [
    {
        name: "Transaction 1",
        amount: 1000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 2",
        amount: 2000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 3",
        amount: 3000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 4",
        amount: 4000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 5",
        amount: 5000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 6",
        amount: 6000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 7",
        amount: 7000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 8",
        amount: 8000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 9",
        amount: 9000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 10",
        amount: 10000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 11",
        amount: 11000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 12",
        amount: 12000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 13",
        amount: 13000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 14",
        amount: 14000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 15",
        amount: 15000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 16",
        amount: 16000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 17",
        amount: 17000,
        category: "2",
        date: new Date(),
    },
    {
        name: "Transaction 18",
        amount: 18000,
        category: "3",
        date: new Date(),
    },
    {
        name: "Transaction 19",
        amount: 19000,
        category: "1",
        date: new Date(),
    },
    {
        name: "Transaction 20",
        amount: 20000,
        category: "2",
        date: new Date(),
    },
];

const DashboardPage: React.FC = () => {
  const url = 'http://34.168.188.169:3000/movimientos/1'
  const [List, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setList(data); // Update the List state with the fetched data
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboardWrap">

      <Header number={2} />
      <h1 className="dashboardMainTittle">Bienvenido Carlos</h1>
      {/* Add your dashboard components and content here */}
      <div className="graphSection">
        <PieChart
          colors={["#6300a5", "#FF5733", "#C70039", "#00a400", "#ffd300"]}
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Entretenimiento" },
                { id: 1, value: 15, label: "Transporte" },
                { id: 2, value: 20, label: "Varios" },
                { id: 3, value: 20, label: "Basicos" },
                { id: 4, value: 20, label: "Restaurantes" },
              ],
              cx: 120,
              innerRadius: 10,
              paddingAngle: 2,
              cornerRadius: 5,
            },
          ]}
          height={200}
        />
        <div className="buttonContainer">
          <Link href={"/dashboard/report"}>
            <button className="graphButton">Ver Tu Reporte</button>
          </Link>
            <Link href={"/dashboard/registerDataM"}>
                <button className="graphButton">Registrar Transaciones</button>
            </Link>
        </div>
      </div>
      <div className="expensesSection">
        <h2 className="expenssesTittle">Ultimas Transacciones</h2>

        <div className="transactionContainer">
          {/* COMPONENT */}
          {List.map((transaction, index) => (
        <Transaction
          key={index}
          name={transaction.nombre_lugar}
          amount={transaction.cantidad}
          category={transaction.tipo}
          date={transaction.fecha}
        />
      ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
