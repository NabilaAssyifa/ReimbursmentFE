import React from 'react';
import { Disclosure, Menu, MenuButton, MenuItems, MenuItem, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../asset/logoqlm.png'; // Ensure the path is correct
import profileImage from '../asset/profileImage.svg'; // Ensure the path is correct
import user from '../asset/user.jpg'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faSignature } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <DisclosureButton className=" ml-4 inline-flex items-center justify-center p-2 text-gray-400  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Your Company" className="h-6 w-13 ml-14" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex rounded-full mr-5 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="Profile"
                      src={profileImage}
                      className="h-10 w-10 rounded-full "
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  as="ul"
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div className="p-8 flex flex-col items-center">
        <div className=" items-center">
        <div className="bg-black rounded-xl h-54 w-full flex flex-col items-center justify-center text-white mt-16">
        <img src={user} className="w-30 h-32 rounded-full mt-[-46px]" />
        <h1 className="mt-3 text-lg font-bold "><FontAwesomeIcon icon={faSignature}/>Gem</h1>
        <hr className="my-1 border-white w-3/4 text-sm" />
        <p className="mt-3 text-sm"><FontAwesomeIcon icon={faSignature}/>Gem</p>
        

      </div>

          <div className=' flex flex-col items-center justify-center' >
            <h1 className="text-xl font-bold text-black mt-5">Halo!</h1>
            <h1 className="text-xl font-bold text-black">Selamat Datang User</h1>
            <p className="text-gray-600 mt-2 text-sm text-center  ">
              Tetap bekerja keras untuk sesuatu yang bisa kamu nikmati. Nikmati makanan yang nantinya akan kamu beli dan nikmati situasi dan pemandangannya.<br />
              <span className="font-bold">Paham?</span> - Kak Gem
            </p>
          </div>
        </div>
        <button className="mt-7 bg-black text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-700">
        <FontAwesomeIcon icon={faPlus} />
        <span>Add Request</span>
      </button>      
      </div>
    </>
  );
}
