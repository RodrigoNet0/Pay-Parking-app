import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'

// Definindo tipos para navegação e itens
type NavigationItem = {
  name: string
  href: string
  price: number
}

type NavigationSection = {
  id: string
  name: string
  items: NavigationItem[]
}

type NavigationCategory = {
  id: string
  name: string
  sections: NavigationSection[]
}

type CartItem = NavigationItem & { quantity: number }

const navigation: { categories: NavigationCategory[] } = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#', price: 50 },
            { name: 'Dresses', href: '#', price: 80 },
            { name: 'Pants', href: '#', price: 60 },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#', price: 150 },
            { name: 'Wallets', href: '#', price: 40 },
            { name: 'Bags', href: '#', price: 100 },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#', price: 120 },
            { name: 'My Way', href: '#', price: 90 },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#', price: 45 },
            { name: 'Pants', href: '#', price: 70 },
            { name: 'Sweaters', href: '#', price: 85 },
            { name: 'T-Shirts', href: '#', price: 25 },
            { name: 'Jackets', href: '#', price: 110 },
            { name: 'Activewear', href: '#', price: 55 },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#', price: 120 },
            { name: 'Wallets', href: '#', price: 35 },
            { name: 'Bags', href: '#', price: 90 },
            { name: 'Sunglasses', href: '#', price: 75 },
            { name: 'Hats', href: '#', price: 25 },
            { name: 'Belts', href: '#', price: 30 },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#', price: 65 },
            { name: 'Counterfeit', href: '#', price: 55 },
            { name: 'Full Nelson', href: '#', price: 100 },
            { name: 'My Way', href: '#', price: 80 },
          ],
        },
      ],
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header2() {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (item: NavigationItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (itemName: string, amount: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.name === itemName ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    })
  }

  const removeFromCart = (itemName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName))
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <button
                                    onClick={() => addToCart(item)}
                                    className="-m-2 block p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                                  >
                                    {item.name} - ${item.price}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Mith</span>
                  <img
                    className="h-8 w-auto"
                    src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
                    alt="Mith profile"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium'
                            )}
                          >
                            {category.name}
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    {category.sections.map((section) => (
                                      <div key={section.name} className="grid grid-cols-2 gap-y-10 gap-x-8">
                                        <div>
                                          <p className="font-medium text-gray-900">{section.name}</p>
                                          <ul role="list" className="mt-6 space-y-6">
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flow-root">
                                                <button
                                                  onClick={() => addToCart(item)}
                                                  className="-m-2 block p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                                                >
                                                  {item.name} - ${item.price}
                                                </button>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <button
                  className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setCartOpen(true)}
                >
                  <span className="sr-only">View cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                    onClick={() => setCartOpen(true)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    View Cart ({cart.length})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Cart */}
      <Transition.Root show={cartOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setCartOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((item) => (
                            <li key={item.name} className="flex py-6">
                              <div className="flex-1 flex items-center justify-between">
                                <div>
                                  <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                                  <p className="mt-1 text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => updateQuantity(item.name, -1)}
                                    className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                                  >
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.name, 1)}
                                    className="p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                                  >
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  </button>
                                </div>
                                <p className="ml-4 text-base font-medium text-gray-900">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.name)}
                                  className="p-1 text-red-500 hover:text-red-700"
                                >
                                  <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${getTotal()}</p>
                    </div>
                    <div className="mt-6">
                      <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
