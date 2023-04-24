import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-477px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Main;
