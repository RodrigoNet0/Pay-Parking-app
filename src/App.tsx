import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Client from "./components/Client";
import Shop from "./components/Shop";
import Login from "./components/Login";
// import Home from "./components/Home";



function App() {
  // receber parametro (nome) fora da função

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Form" element={<Form />}/>
        <Route path='/Login' element={<Login />}/>
         {/* <Route path="/Home" element={<Home/>}/>  */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
