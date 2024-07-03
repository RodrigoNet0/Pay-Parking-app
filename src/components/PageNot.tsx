import { Link } from "react-router-dom";


export default function PageNot() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-gray-200 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center animate-fadeIn">
          <img 
            src='https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg'
            alt="Funny bug illustration" 
            className="w-32 h-32 mx-auto animate-bounce"
          />
          <p className="mt-4 text-2xl font-bold text-slate-500">Estamos trabalhando no site!</p>
          <p className="text-base font-semibold text-slate-400 font-bold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página não encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/Form"
              className="rounded-md bg-slate-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para o início
            </Link>
            <a href="http://www.github.com/RodrigoNet0" className="text-sm font-semibold text-gray-900">
              Contate o suporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
