import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Client from './components/Client';
function App() {
 
// receber parametro (nome) fora da função

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/Client' element={<Client />}/>
  <Route path="*" element={<h1>Page not found</h1>}/>
</Routes>
</BrowserRouter>
   
  )
}

export default App
