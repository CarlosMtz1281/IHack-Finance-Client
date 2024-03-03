"use client";

import React from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="dashboard-layout">
      <LocalizationProvider dateAdapter={AdapterDayjs}>

            <main>
                {children}
            </main>
        </LocalizationProvider>
        </div>
    );
};

export default DashboardLayout;
