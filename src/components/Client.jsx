import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom';
import { FaAngleDoubleLeft } from "react-icons/fa";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name:  'Payment', href: '#', current: true },

 
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: 'https://friendly-train-qw57rxqrxxwf6rj-5173.app.github.dev/Notification' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ClientSection() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-200 rounded-lg">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://www.mithoficial.com.br/tema/new-mith-vue/dist/img/logo-mith.ae8a4321.svg"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-black font-bold hover:bg-slate-300 hover:text-black',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                         <Link className=' flex justify-center hover:bg-slate-400 rounded-lg px-4 py-1' to={'/Form'}><FaAngleDoubleLeft size={20} /></Link>
                      </div>
                    </div>
                  </div>

                 

                  
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  
                                  <a
                                 
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                  
                                )}
                                
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
             
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className=" text-sm font-medium leading-none text-gray-400">{user.email}</div>
                      <Link className='hover:bg-slate-400 rounded-lg px-1 py-1' to={'/Form'}><FaAngleDoubleLeft size={20} /></Link>

                    </div>
                   
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Payment</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-1">Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" className="form-input w-full border-gray-300 rounded-md" placeholder="Enter card number" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="expMonth" className="block text-gray-700 font-medium mb-1">Expiration Month</label>
                    <input type="text" id="expMonth" name="expMonth" className="form-input w-full border-gray-300 rounded-md" placeholder="MM" />
                  </div>
                  <div>
                    <label htmlFor="expYear" className="block text-gray-700 font-medium mb-1">Expiration Year</label>
                    <input type="text" id="expYear" name="expYear" className="form-input w-full border-gray-300 rounded-md" placeholder="YYYY" />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-gray-700 font-medium mb-1">CVC</label>
                    <input type="text" id="cvc" name="cvc" className="form-input w-full border-gray-300 rounded-md" placeholder="CVC" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="cardHolder" className="block text-gray-700 font-medium mb-1">Cardholder Name</label>
                  <input type="text" id="cardHolder" name="cardHolder" className="form-input w-full border-gray-300 rounded-md" placeholder="Cardholder Name" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">Submit Payment</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
