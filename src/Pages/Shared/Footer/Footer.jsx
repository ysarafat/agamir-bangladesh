import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-text-primary text-slate-300 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto px-4 justify-items-center-start lg:justify-items-center py-14 ">
                <div className="">
                    <h1 className="text-primary font-bold text-xl lg:text-4xl bold ">
                        AGAMIR <span className="text-secondary">BANGLADESH</span>
                    </h1>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">RESOURCES</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">OUR MISSIONS</Link>
                        </li>
                        <li>
                            <Link to="/">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/">ONNESHON PLUS</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">FOLLOW US</h2>
                    <ul>
                        <li>
                            <Link to="/"> Facebook Page </Link>
                        </li>
                        <li>
                            <Link to="/"> Facebook Group </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">CONTACT</h2>
                    <p>Badargonj, Rangpur-5430</p>
                </div>
            </div>
            <div className="text-center border-t border-slate-600 container mx-auto px-4 py-5">
                &#169;2023 Agamir Bangladesh, All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
