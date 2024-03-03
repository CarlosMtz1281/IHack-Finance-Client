// pages/registro.tsx
// pages/registro.tsx
"use client";

import React from "react";
import "../../style/registerdataM.css";
import Link from "next/link";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/NavBar";

const Registro: React.FC = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<string>(new Date().toISOString());
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const url = "http://34.168.188.169:3000/movimientoManual";

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleDate = (date: Date | null) => {
    if (date) {
      setDate(date.toISOString());
    }
  };

  const handleSubmit = async () => {
    if(file){
      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("id_miembro", localStorage.getItem("id_miembro")!);


      try {
        const response1 = await fetch("http://34.168.188.169:3000/movimientoPDF" , {
          method: "POST",
          body: formData,
        });
        console.log(response1);
      }
      catch (error) {
        console.error("An error occurred", error);
      }
    }else{

    //!!!!!!!!!!!
    var gasto = false;

    if (category !== "Ingresos") {
      gasto = true;
    }
    console.log(typeof date);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre_lugar: name,
        cantidad: amount,
        tipo: category,
        fechaMovimiento: date ? date : "",
        gasto: gasto,
        id_miembro: localStorage.getItem("id_miembro"),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.text();
    console.log("Response Body:", responseBody);
    }

    alert("Registro exitoso");
  };

  return (
    <div className="container">
      <Navbar navType={2} />
      <header className="header">
        <h1 className="mainTittle">Registra una Nueva Transacción</h1>
      </header>

      <div className="main">
        <h2>Registro Manual</h2>
        <TextField
          id="outlined-basic"
          label="Nombre de Comercio"
          variant="outlined"
          style={{ width: "90vw" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="inputContainer Box">
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={category}
            label="Categoria"
            onChange={handleSelectChange}
            style={{ width: "64vw" }}
          >
            <MenuItem value={"Entretenimiento"}>Entretenimiento</MenuItem>
            <MenuItem value={"Ingresos"}>Ingresos</MenuItem>

            <MenuItem value={"Varios"}>Varios</MenuItem>
            <MenuItem value={"Transporte"}>Transporte</MenuItem>
            <MenuItem value={"Basicos"}>Basicos</MenuItem>
            <MenuItem value={"Restaurantes"}>Restaurantes</MenuItem>
          </Select>
          {/*NUMBER TEXTFIELD */}
          <DatePicker label="Fecha" onChange={handleDate} />

          <br />
        </div>
        <div>
          <TextField
            id="outlined-number"
            label="Number"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              const onlyNums = event.target.value.replace(/[^0-9]/g, "");
              setAmount(parseInt(onlyNums, 10));
            }}
            style={{ width: "90vw", marginTop: "20px" }}
          />
        </div>
        <h2 className="subtittle">Registro Automatico con PDF</h2>
        <input
          className="fileInput"
          type="file"
          accept=".pdf"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              // Handle the file here
              setFile(file);
            }
          }}
        />
      </div>

      <div className="footerBox">
        <Link href={"/dashboard"}>
          <button className="button">Terminar</button>
        </Link>
        <button className="button" onClick={handleSubmit}>
          Siguiente registro
        </button>
      </div>
    </div>
  );
};

export default Registro;
