// pages/registro.tsx
// pages/registro.tsx

import React from 'react';
import "../../style/registerdataM.css"

const Registro: React.FC = () => {
    return (
      <div className="container">
        <header className="header">
          <h1>Registro Nuevo</h1>
        </header>
        <main className="main">
        <input type="text" placeholder="Nombre de gasto" className="input Box " />
          <div className="inputContainer Box">
        <select className="select Box">
        <option value="">Seleccionar sección</option>
     {/* Opciones para las secciones de gastos */}
        </select>
        <input type="number" placeholder="Costo del gasto" className="input Box" />
        </div>
        </main>
        <footer className="footer Box">
          <button className="button red">Terminar</button>
          <button className="button blue">Siguiente registro</button>
        </footer>
      </div>
    );
  };
  
  export default Registro;