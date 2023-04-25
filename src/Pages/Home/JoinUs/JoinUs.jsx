import Lottie from 'lottie-react';
import React from 'react';
import donationBox from '../../../assets/Lottie/Box.json';
import VOLUNTEER from '../../../assets/Lottie/VOLUNTEER.json';

function JoinUs() {
    return (
        <div className="mt-16 container mx-auto px-4">
            <div className="mb-4 ">
                <h1 className="heading-text">Join Us</h1>
                <div className="border-4 border-slate-400 w-20 mx-auto rounded-lg mt-2" />
            </div>

            <p className="sub_title">
                Thank you for being a part of our community or group with a good cause.
            </p>
            <div className="flex justify-center flex-col lg:flex-row gap-5 text-center mt-8">
                <div
                    className=" bg-[#F9F9FF] p-6 pt-0 rounded-lg drop-shadow-lg "
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <Lottie
                        className="max-w-[500px] max-h-[300px] lg:h-[300px]"
                        animationData={donationBox}
                        loop
                    />
                    <h3 className="text-center text-xl font-bold uppercase">Donations</h3>
                    <p className="sub_title mt-2">
                        Your contribution, no matter how big or small, can make a significant impact
                        on the lives of those we serve.
                    </p>
                    {/* <button className="uppercase mt-3 bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-black">
                        Make a donate
                    </button> */}
                </div>
                <div
                    className=" bg-[#F9F9FF] p-6 pt-0 rounded-lg drop-shadow-lg "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <Lottie
                        className="max-w-[500px] max-h-[300px] lg:h-[300px]"
                        animationData={VOLUNTEER}
                        loop
                    />
                    <h3 className="text-center text-xl font-bold uppercase">VOLUNTEER</h3>
                    <p className="sub_title mt-2">
                        Our volunteer team is a diverse group of individuals from different
                        backgrounds and with various skills and talents.
                    </p>
                    {/* <button className="uppercase mt-3 bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-black">
                        Make a donate
                    </button> */}
                </div>
                <div
                    className=" bg-[#F9F9FF] p-6 pt-0 rounded-lg drop-shadow-lg "
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <Lottie
                        className="max-w-[500px] max-h-[300px] lg:h-[300px]"
                        animationData={donationBox}
                        loop
                    />
                    <h3 className="text-center text-xl font-bold uppercase">Monthly donation</h3>
                    <p className="sub_title mt-2">
                        Your contribution, no matter how big or small, can make a significant impact
                        on the lives of those we serve.
                    </p>
                    {/* <button className="uppercase mt-3 bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-black">
                        Make a donate
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
