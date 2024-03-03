"use client";
import React from "react";
import "../../style/report.css";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import ReportCard from "../../components/reportCard";
import { BurgerNav } from "@/app/components/BurgerNav/BurgerNav";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";


const Page = () => {
    const [data, setData] = useState([{}]);
    const [resumen, setResumen] = useState("");

  const url = "http://34.168.188.169:3000/reportesMiembro";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            id_miembro: localStorage.getItem("id_miembro"),
          },
        });

        // Use the response here
        const data = await response.json();
        console.log(data);
        setResumen(data[1].resumen);
        const mes2 = JSON.parse(data[1].datos);
        const mes1 = JSON.parse(data[0].datos);
        console.log("mes2", mes2);
        console.log("mes1", mes1);
        const categories = Object.keys(mes1);

        const result = categories.map((category) => ({
          category,
          mes1: mes1[category],
          mes2: mes2[category],
        }));

        console.log(result);


        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]); // Add dependencies here if any

  return (
    <div>
      <Header number={2} />

      <div className="headerSection">
        <h1 className="mainTittle">Reporte Mensual</h1>
        <div className="chartWrap">
          <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
        </div>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <ReportCard
              category={item.category}
              data={item.mes2}
              lastData={item.mes1}
              recommendation={item.recommendation}
            />
            <div className="separator" />
          </div>
        ))}
      </div>
      <div>
        <h4 className="resumenTittle">Recomendaciones de Optimicacion</h4>
        <p className="resumenTxt">{resumen}</p>
      </div>
    </div>
  );
};

export default Page;
