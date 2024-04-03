import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { infoData } from "data/data";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
