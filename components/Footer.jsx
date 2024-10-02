import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-blue-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image src="/digi-logo1.png" width={200} height={100} className="w-2/5 me-3" alt="SEOTech Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline font-extralight">First</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline font-extralight">Second</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline font-extralight">Third</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline font-extralight">Fourth</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline font-extralight">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline font-extralight">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-xs font-extralight text-gray-400 sm:text-center">
                        Developed by - <a href="https://www.upwork.com/freelancers/~013ba164577475f43f?mp_source=share" className="hover:underline">Omni Business Solutions</a>
                    </span>
                    <span className="text-xs font-extralight text-gray-400 sm:text-center">
                        © 2024 <a href="#" className="hover:underline">SEOTech</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        {/* Repeat similar for other social icons */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
