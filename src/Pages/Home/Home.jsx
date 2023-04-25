import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import JoinUs from './JoinUs/JoinUs';
import OurMIssion from './OurMission/OurMIssion';
import SubscribeForm from './SubscribeForm/SubscribeForm';

function Home() {
    return (
        <div>
            <Banner />
            <JoinUs />
            <div className="mt-16">
                <OurMIssion />
            </div>
            <SubscribeForm />
        </div>
    );
}

export default Home;
