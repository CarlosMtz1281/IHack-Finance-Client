"use client";
import React from "react";
import "../../style/report.css";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import ReportCard from "../../components/reportCard";
import { BurgerNav } from "@/app/components/BurgerNav/BurgerNav";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavBar from "@/app/components/NavBar";


const Page = () => {
        const [data, setData] = useState<{ category: string, mes1: number, mes2: number, recommendation: string }[]>([]);
        const [resumen, setResumen] = useState("");
        const [history, setHistory] = useState<number[]>([])

    const url = "http://34.168.188.169:3000/reportesMiembro";
    useEffect(() => {
        const fetchData = async () => {
            let key = "id_miembro";
            if (typeof window !== 'undefined') {
                // Perform localStorage action
                key = localStorage.getItem("id_miembro") || ""
              }
                const response = await fetch(url, {

                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        id_miembro: key,
                    },
                });

                // Use the response here
                const data = await response.json();
                console.log(data);
                //guardanmos data en el history
                // Assuming data is your array

                interface Data {
                    fecha: string;
                    total_ingresos: number;
                }

                let sortedData = data.sort((a: Data, b: Data) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

                let ingresosData = sortedData.map((item: Data) => item.total_ingresos);

                console.log(ingresosData);
                setHistory(ingresosData);
                setResumen(data[3].resumen);
                const mes2 = JSON.parse(data[1].datos);
                const mes1 = JSON.parse(data[0].datos);
                console.log("mes2", mes2);
                console.log("mes1", mes1);
                const categories = Object.keys(mes1);

                const result = categories.map((category) => ({
                    category,
                    mes1: mes1[category],
                    mes2: mes2[category],
                    recommendation: "", // Add the recommendation property here
                }));

                console.log(result);


                setData(result);

        };

        fetchData();
    }, [url]); // Add dependencies here if any

    return (
        <div>
                <NavBar navType={2} />
            <div className="headerSection">
                <div className="topHeader">
                <h1 className="mainTittle">Reporte Mensual</h1>
                <h4 className="subTittle">Tus Ingresos en los ultimos meses</h4>

                </div>
                <div className="chartWrap">
                <SparkLineChart data={history} height={100} />        </div>
            </div>
            <div className="cardContainer">
                {data.map((item, index) => (
                    <div key={index}>
                        <ReportCard
                            category={item.category}
                            data={item.mes2}
                            lastData={item.mes1}
                            recommendation={item.recommendation} // Update the code here
                        />
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
