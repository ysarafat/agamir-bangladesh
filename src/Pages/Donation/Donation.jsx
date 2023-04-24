import Lottie from 'lottie-react';
import React from 'react';
import donationBox from '../../assets/Lottie/Box.json';

function Donation() {
    return (
        <div>
            <h1>Donation coming soon..</h1>
            <Lottie
                className="max-w-[500px] max-h-[300px] lg:h-[300px]"
                animationData={donationBox}
                loop
            />
        </div>
    );
}

export default Donation;
