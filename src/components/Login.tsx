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

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

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
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-slate-700">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto shadow-2xl"
          src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
          alt="Mith"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-slate-200 px-8 py-6 shadow-md rounded-lg">
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
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-700 leading-tight shadow appearance-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
                  className="font-semibold text-slate-700 hover:text-slate-500"
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
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-700 leading-tight shadow appearance-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-slate-400 hover:bg-slate-300 py-2 px-4 text-sm font-bold text-gray-700 leading-tight shadow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              <IoEnterOutline size={20} color="black" />
            </button>
          </div>
        </form>
        <Link
          className="flex flex-col items-center mt-6 text-black hover:text-black px-2 py-2 text-sm"
          to={"/Notification"}
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
