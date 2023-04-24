import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Donation from '../Pages/Donation/Donation';
import Home from '../Pages/Home/Home';
import OurMission from '../Pages/OurMission/OurMission';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/our-mission',
                element: <OurMission />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },
            {
                path: '/donation',
                element: <Donation />,
            },
        ],
    },
]);
export default router;
