"use client";
import React, { use, useEffect } from "react";
import Link from "next/link";
import { PieChart } from "@mui/x-charts/PieChart";
import "../style/dashboard.css";
import Header from "../components/Header/Header";
import { useState } from "react";

import Transaction from "../components/transactions";
import Navbar from "../components/NavBar";

interface Transaction {
  nombre_lugar: string;
  cantidad: number;
  tipo: string;
  fecha: string;
}

const DashboardPage: React.FC = () => {
  const url = 'http://34.168.188.169:3000/movimientos/1'
  const [List, setList] = useState<Transaction[]>([]);
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

      <Navbar navType={2} />
      <h1 className="dashboardMainTittle">Bienvenido {localStorage.getItem("nombre")}</h1>
      <h3 className="dashboardSubTittle">Tus Gastos del mes</h3>
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
              innerRadius: 15,
              paddingAngle: 3,
              cornerRadius: 0
              ,
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
