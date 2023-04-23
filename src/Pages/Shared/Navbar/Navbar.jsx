// eslint-disable-next-line import/no-extraneous-dependencies
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="flex justify-between container mx-auto items-center px-4 py-5">
            <div>
                <Link to="/">
                    <h1 className="text-primary font-bold text-xl lg:text-4xl bold">
                        AGAMIR <span className="text-secondary">BANGLADESH</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <ul className="lg:flex gap-4 text-xl hidden">
                    <li className="hover:text-blue-800">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : 'text-[#161616] hover:text-primary'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="hover:text-blue-800">
                        <NavLink
                            to="/Projects"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : 'text-[#161616] hover:text-primary'
                            }
                        >
                            Our Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : 'text-[#161616] hover:text-primary'
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : 'text-[#161616] hover:text-primary'
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : 'text-[#161616] hover:text-primary'
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ? (
                            <XMarkIcon class="h-8 w-8 text-primary" />
                        ) : (
                            <Bars3Icon class="h-8 w-8 text-primary" />
                        )}
                    </button>
                    {!isOpen && (
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <ul
                            onClick={() => setIsOpen(!isOpen)}
                            className="absolute  duration-300 delay-500	 top-[79.34px] left-0 right-0 w-full px-5 py-5 z-10 bg-[#C5EAD4]"
                        >
                            <li className="mb-1">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-primary'
                                            : 'text-[#161616] hover:text-primary'
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink
                                    to="/Projects"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-primary'
                                            : 'text-[#161616] hover:text-primary'
                                    }
                                >
                                    Our Project
                                </NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-primary'
                                            : 'text-[#161616] hover:text-primary'
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-primary'
                                            : 'text-[#161616] hover:text-primary'
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink
                                    to="/donation"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-primary'
                                            : 'text-[#161616] hover:text-primary'
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
