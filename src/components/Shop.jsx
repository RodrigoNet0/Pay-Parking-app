import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
const products = [
  {
    id: 1,
    name: "CAMISETA RAGLAN SUPERSPORT AMARELO",
    href: "https://www.mithoficial.com.br/camiseta-oversized-mith-nation-amarelo-amarelo",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-mith-nation-amarelo-6.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$93,60",
    color: "Yellow",
  },
  {
    id: 2,
    name: "CAMISETA RAGLAN SUPERSPORT PRETO",
    href: "https://www.mithoficial.com.br/camiseta-raglan-supersport-preto-preto",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-raglan-03-preto-2.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 93,60",
    color: "Black",
  },
  {
    id: 3,
    name: "REGATA GTA CANELADA MITH NATION PRETO",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_regata-gta-canelada-mith-nation-preto.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 149,00",
    color: "Black",
  },
  {
    id: 4,
    name: "REGATA GTA CANELADA MITH NATION BRANCA",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_regata-gta-canelada-mith-nation-off-white.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 149,00",
    color: "White",
  }, 
  {
    id: 5,
    name: "REGATA DROP SHOULDER SLEVELESS MITH COMAM FRUTAS ARCADE LOGO PRETO",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_regata-drop-shoulder-sleveless-mith-comam-frutas-arcade-logo-preto-2.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 109,00",
    color: "Black",
  }, 
  {
    id: 6,
    name: "CAMISETA OVERSIZED MITH COMAM FRUTAS OUTLINE BEGE",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-mith-comam-frutas-outline-bege-6.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 134,00",
    color: "White",
  }, 
  {
    id: 7,
    name: "REGATA DROP SHOULDER SLEVELLES RAMON DINO OFF WHITE",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_regata-drop-shoulder-slevelles-ramon-dino-off-white-35.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 86,10",
    color: "White",
  },
  {
    id: 8,
    name: "REGATA DROP SHOULDER SLEVELLES RAMON DINO OFF WHITE",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_regata-cut-off-ramon-dino-preto-24.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 86,10",
    color: "Black",
  },
  {
    id: 9,
    name: "CAMISETA OVERSIZED ZANCANELLI CLASSIC PHYSIQUE PRETO",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_camiseta-oversized-zancanelli-classic-physique-preto-2.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$:161,85",
    color: "Black",
  },
  {
    id: 10,
    name: "CAMISA JERSEY ZANCANELLI OFF WHITE",
    imageSrc:
      "https://www.mithoficial.com.br/upload/produto/imagem/b_camisa-jersey-zancanelli-off-white.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "R$: 161,85",
    color: "White",
  }
  // More products...
];

export default function Shop() {
  return (
    <div className="bg-white">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Link className='  hover:text-black rounded-md px-3 py-2' to={'/Form'}><FaAngleDoubleLeft size={40} /></Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Profile Dropdown */}





    </div>
  );
}
