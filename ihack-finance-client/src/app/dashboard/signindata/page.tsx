// pages/nuevaPagina.tsx

import React from 'react';
import "../../style/signup.css"

const Signup: React.FC = () => {
    return (
        <div className="container">
        <div className="form-section">
            <p className="intro-text">Da tu primer paso para</p>
            <input type="text" placeholder="Nombre" className="input" />
            <input type="text" placeholder="Apellido" className="input" />
            <p>Para continuar, es necesario saber tus ingresos y gastos mensuales.</p>
            <input type="number" placeholder="Saldo Actual" className="input saldo-actual" />
            <div className="button-group">
                <div className="button-container">
                    <button className="button">PDF</button>
                    <p className="button-description">Descarga un pdf de tu tarjeta bancaria.</p>
                </div>
                <div className="button-container">
                    <button className="button">Manual</button>
                    <p className="button-description">Ingresa tus datos mensuales manualmente.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;
