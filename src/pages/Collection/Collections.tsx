
const callouts = [
    {
      name: 'SHORTS DE TACTEL FORRADO MITH ARMY STRIPES PRETO',
      description: 'Black',
      imageSrc: 'https://www.mithoficial.com.br/upload/produto/imagem/b_shorts-de-tactel-forrado-mith-army-stripes-preto.webp',
      imageAlt: 'SHORTS DE TACTEL FORRADO MITH ARMY STRIPES PRETO',
      href: '/Shop',
    },
    {
      name: 'SHORTS DE MOLETOM MITH ARMY OFF WHITE',
      description: 'White',
      imageSrc: 'https://www.mithoficial.com.br/upload/produto/imagem/b_shorts-de-moletom-mith-army-off-white.webp',
      imageAlt: 'SHORTS DE MOLETOM MITH ARMY OFF WHITE',
      href: '/Shop',
    },
    {
      name: 'SHORTS DE MALHA SUBLIMADA MITH ARMY DISCIPLINE AND FREEDOM VERDE',
      description: 'Green',
      imageSrc: 'https://www.mithoficial.com.br/upload/produto/imagem/b_shorts-de-malha-sublimada-mith-army-discipline-and-freedom-verde.webp',
      imageAlt: 'SHORTS DE MALHA SUBLIMADA MITH ARMY DISCIPLINE AND FREEDOM VERDE',
      href: '/Shop',
    },
  ]
  
  export default function Example() {
    return (
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900  animate-bounce">OUTROS</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  