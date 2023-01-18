import React from "react";
import "./App.css"; /* 
import ParticleBackground from "./ParticleBackground";
import Navbar from "./components/navbar"; */
import AppLayout from "@App/core/AppLayout";
import { Navbar } from "@App/core/AppLayout/Components";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AppLayout />
    </React.Fragment>
  );
}

export default App;
