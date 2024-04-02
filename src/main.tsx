import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { infoData } from "data/data";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />

    <p
      className="relative text-center text-white font-thin top-2  z-50 w-fit mx-auto p-2 rounded-sm"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
      id="copyright"
    >
      ©2024 {infoData.name}. All Rights Reserved.
    </p>
  </React.StrictMode>
);
