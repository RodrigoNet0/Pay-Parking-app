import{ useState, useEffect }from 'react'; 
import './App.css'
import { Header} from './components/Header.tsx';
import Form  from './components/Form.tsx';
import ClientSection from './components/Client.jsx';
function App() {
 
// receber parametro (nome) fora da função

  return (

    <>
      <Header/>
      <Form/>
      <ClientSection clientName={undefined} />
    </>
  )
}

export default App
