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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Registro: React.FC = () => {
  const [category, setCategory] = useState("");
  const handleSelectChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <div className="container">
      <header className="header">
        <h1 className="mainTittle">Registra una Nueva Transacion</h1>
      </header>

      <div className="main">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={{ width: "90vw" }}
        />
        <div className="inputContainer Box">
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={category}
            label="Categoria"
            onChange={handleSelectChange}
            style={{ width: "50vw" }}
          >
            <MenuItem value={"Entretenimiento"}>Entretenimiento</MenuItem>
            <MenuItem value={"Ingresos"}>Ingresos</MenuItem>

            <MenuItem value={"Comidas"}>Comidas</MenuItem>
            <MenuItem value={"Transporte"}>Transporte</MenuItem>
            <MenuItem value={"Profesionales"}>Profesionales</MenuItem>
            <MenuItem value={"Salud"}>Salud</MenuItem>
            <MenuItem value={"Generales"}>Generales</MenuItem>
          </Select>
          {/*NUMBER TEXTFIELD */}
          <DatePicker label="Fecha" />


          <br/>
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
              const onlyNums = event.target.value.replace(/[^0-9]/g, '');
              event.target.value = onlyNums;
            }}
            style={{ width: "90vw", marginTop: "20px"}}
          />
        </div>

      </div>

      <div className="footerBox">
        <Link href={"/dashboard"}>
          <button className="button red">Terminar</button>
        </Link>
        <button className="button blue">Siguiente registro</button>
      </div>
    </div>
  );
};

export default Registro;
