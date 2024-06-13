import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (!email || !validateEmail(email)) {
      toast.error('Por favor, insira um email válido.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!password || password.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.success(`Cadastro realizado com sucesso para o email: ${email}!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("Cadastro realizado com sucesso!");

    localStorage.setItem('registeredEmail', email);
    setTimeout(() => {
      navigate('/Login');
    }, 2000);
  };

  return (
    
    <div className="flex flex-start justify-around px-5 items-center h-screen bg-slate-700">
      
      <form onSubmit={handleCadastro} className="w-full max-w-md bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div className='flex justify-center'>
          <img src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg" alt="profile-mith" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center mt-6">Cadastre-se</h2>
        </div>
        <div className="mb-4 mt-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-slate-400 hover:bg-slate-300 text-gray-700 font-bold py-2 
            px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cadastrar
          </button>

         
          
        </div>
        <h4 className='text-center mt-6 font-semibold'>Todos os direitos reservados <span className='font-extrabold'>Drop You</span></h4>
      </form>
     
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
      <div className='w-full h-auto'>
        <img 
        src="https://technitute.pk/Images/home-hero-image.png"
         alt="profile-banner" 
         
         />
      </div>
      
    </div>
    
  );
};

export default Notification;
