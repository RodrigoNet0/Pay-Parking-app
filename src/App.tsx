import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Client from "./pages/Client";
import Shop from "./pages/Shop";
import Login from "./components/Login";
import Home from "./pages/Home";
import PageNot from "./components/PageNot";
import Notification from "./pages/Notification/Notification";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notification />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Form" element={<Form />}/>
        <Route path='/Login' element={<Login />}/>
         <Route path="/Home" element={<Home/>}/>  
        <Route path="*" element={<PageNot />} />
        <Route path="/Notification" element={<Notification />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
