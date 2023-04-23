import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Main;
