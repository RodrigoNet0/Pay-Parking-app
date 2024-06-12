import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEnterOutline } from "react-icons/io5";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const registeredEmail = localStorage.getItem("registeredEmail");
    if (registeredEmail) {
      setEmail(registeredEmail);
    }
  }, []);

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    if (!email || !validateEmail(email)) {
      toast.error("Por favor, insira um email válido.", {
        position: "top-right",
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
      toast.error("A senha deve ter no mínimo 6 caracteres.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = "123456";
    if (email === registeredEmail && password === registeredPassword) {
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/Form');
      }, 2000);
      console.log("Login realizado com sucesso!");
    } else {
      toast.error("Email ou senha inválidos.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8 bg-slate-700">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto shadow-2xl"
          src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
          alt="Mith"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-200 px-4 py-4 rounded">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm 
              font-semibold leading-6 text-slate-400 shadow-sm focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             <IoEnterOutline size={30}/>
            </button>
          </div>
        </form>

        <Link
          className="flex flex-col justify-center text-center mt-7 bg-slate-400 text-white
         hover:text-white rounded-md px-2 py-2 text-sm hover:bg-slate-500 font-semibold"
          to={"/Notification"}
        >
          Cadastre-se
        </Link>
        <Link
          className="flex flex-col mt-7 text-black hover:text-black 
        rounded-md px-2 py-2 text-sm"
          to={"/Form"}
        >
          <FaAngleDoubleLeft size={22} />
        </Link>
      </div>

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
    </div>
  );
}

export default Login;
