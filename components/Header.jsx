'use client'
import React, { useState } from 'react';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-slate-200 border-gray-200">
            <div className="max-w-screen-xl h-24 flex flex-wrap items-start justify-between mx-auto md:mt-4 p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/digi-logo.png" className="h-20" alt="Flowbite Logo" />
                    <div className='flex flex-col'>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">S-Digi Marketing</span>
                        <span className="self-center text-xs font-extralight tracking-[.25em]">MARKETING EXPERTS</span>
                    </div>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-200">
                        <li>
                            <a href="#" className="block py-2 px-3 font-extralight text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li className="relative z-50">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent font-extralight md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                            >
                                Dropdown
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`z-10 ${dropdownOpen ? 'block' : 'hidden'} font-normal bg-slate-100 divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="block font-extralight px-4 py-2 hover:bg-gray-100">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block font-extralight px-4 py-2 hover:bg-gray-100">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block font-extralight px-4 py-2 hover:bg-gray-100">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block font-extralight px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#services" className="block font-extralight py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#plans" className="block font-extralight py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block font-extralight py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
