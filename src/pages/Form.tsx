import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaShopify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "tailwindcss/tailwind.css";

import {
  ChevronDownIcon,
  PhoneIcon
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Collections from "./Collection/Collections";


const products = [
  {
    name: "Brandão",
    description: "Linha Brandão",
    href: "/Shop",
    icon: ChartPieIcon,
  },
  {
    name: "Dino",
    description: "Linha Ramon Dino",
    href: "/Shop",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Zanca",
    description: "Linha Zanca",
    href: "/Shop",
    icon: FingerPrintIcon,
  },
  {
    name: "Comam Frutas",
    description: "Linha Comam Frutas",
    href: "/Shop",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  
  { name: "Contact sales", href: "http:/www.github.com/RodrigoNet0", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const features = [
  { name: "Dino", description: "A coleção Ramon Dino se destaca como um dos pontos fortes da marca, inspirada por uma figura proeminente no cenário do fisiculturismo nacional." },
  {
    name: "Brandão",
    description:
      "A coleção exclusiva e limitada da collab com Rafa Brandão oferece peças de alta qualidade, desenvolvidas com materiais selecionados, para te acompanhar em todas as missões diárias, dentro e fora da academia. ",
  },
  { name: "Zanca", description: 'Gabriel Zancanelli é um bodybuilder classic, sua linha classic é o carro chefe da coleção.' },
  { name: "Horse", description: "Horse é um bodybuilder Old School e utiliza a linha Golden Era." },
  { name: "Vitor Capial", description: "Coman frutas é sua linha,dispensa apresentação." },
  {
    name: "Dr. Peanut",
    description:
      "A melhor Pasta de amendoim com a melhor Loja de Roupa!.",
  },
];


function Form() {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1200: { items: 5 },
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-200 rounded">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
                alt="Mith-profile"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center 
              justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm 
              font-semibold leading-6 text-gray-900">
                Coleções <GiClothes size={15}/>
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 
                w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm 
                        leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg
                         bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold 
                        leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
              
            <Link
              to={"/Client"}
              className=" flex gap-2 text-center text-sm font-semibold leading-6 text-gray-900"
            >
              Cadastre<FaRegCreditCard size={15} className="mt-1"/>
            </Link>
            <Link
              to={"/Shop"}
              className=" flex gap-2 text-sm font-semibold leading-6 text-gray-900"
            >
              Vitrine <FaShopify size={15} className="mt-1"/>
            </Link>
            <a
              href="https:/www.github.com/rodrigonet0"
              className="text-sm font-semibold leading-6 text-gray-900 flex gap-2"
            >
              GitHub <FaGithub size={15} className="mt-1" />
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to={"/Login"}
              className=" flex gap-2 text-sm font-semibold leading-6 text-gray-900"
            >
              Entrar/Cadastrar<RxAvatar size={17} className="mt-1" />
            </Link>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
                  alt="Mith"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span> 
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Coleções
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    to={"/Client"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Cadastre seu Cartão
                  </Link>

                  <Link
                    to={'/Shop'}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                   Vitrine
                  </Link>
                  <a
                    href="http:/www.github.com/RodrigoNet0"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    GitHub
                  </a>
                </div>
                <div className="py-6">
                  <Link
                   to={'/Login'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Entre/Cadastre-se
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* //header end => navigation */}

     

      <AliceCarousel
         responsive={responsive}
         autoPlay
         autoPlayInterval={1000}
         infinite
        
      >
        <div className="bg-slate-200 p-2">
          <img
            className="w-full h- py-1 h-4/5 "
            src="https://www.mithoficial.com.br/upload/produto/imagem/m_camiseta-oversized-mith-comam-frutas-estonada-quem-faz-dieta-atleta-preto-1.webp"
            alt="brandão"
          />
        </div>
        <div className="bg-slate-200 p-2">
          <img
            className="w-full h- py-1 h-4/5 "
            src="https://www.mithoficial.com.br/upload/produto/imagem/m_camiseta-oversized-comam-frutas-abacaxi-preta-3.webp"
            alt="zanca"
          />
        </div>
        <div className="bg-slate-200 p-2">
          <img
            className="w-full h- py-1 h-4/5 "
            src="https://www.mithoficial.com.br/upload/produto/imagem/m_camiseta-oversized-mith-comam-frutas-neon-preto-3.webp"
            alt="capial"
          />
        </div>
        <div className="bg-slate-200 p-2">
          <img
            className="w-full h- py-1 h-4/5 "
            src="https://www.mithoficial.com.br/upload/produto/imagem/m_camiseta-oversized-mith-comam-frutas-estonada-desayuno-1992-preto-6.webp"
            alt="diogo"
          />
        </div>
      </AliceCarousel>
      {/* End Alice carrousel */}
      <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4x animate-bounce">COLEÇÕES MITH </h2>
          <p className="mt-4 text-gray-500">
          Aqui você encontra tudo para montar seu outfit campeão e pode adquirir roupas fabricadas em poliamida premium com elastano, 
          100% algodão, Techno Taslon Nylon ou proteção UV 50. O silk de qualidade mantém vivas as cores das ilustrações, 
          com durabilidade para aguentar seja qual for o desafio.
          </p>

          <dl className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src="https://www.mithoficial.com.br/upload/produto/imagem/b_regata-drop-shoulder-slevelles-ramon-dino-preto-27.webp"
            alt="Dino"
            className="rounded-lg bg-gray- "
          />
          <img
            src="https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-brand-o-rb-champions-preto-2.webp"
            alt="brandão"
            className="rounded-lg bg-gray- "
          />
          <img
            src="https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-zancanelli-classic-physique-preto-2.webp"
            alt="zanca"
            className="rounded-lg bg-gray- "
          />
          <img
            src="https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-comam-frutas-abacaxi-preta-6.webp"
            alt="Capial Iron school"
            className="rounded-lg bg-gray- "
          />
          
   
        </div>
      </div>
    </div>
    <Collections/>
<Footer />
    </>
  );
}

export default Form;
