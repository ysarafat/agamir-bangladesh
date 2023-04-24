/* eslint-disable import/no-extraneous-dependencies */
import Lottie from 'lottie-react';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import math from '../../assets/math.json';
import './Banner.css';

function Banner() {
    return (
        <div className="bg_banner w-full ">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 container mx-auto px-4 py-10">
                <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white	 uppercase font-bold">
                        Join our mission for a better Bangladesh
                    </h1>
                    <p className="text-base text-white my-5">
                        Our mission is to promote social and economic development by mobilizing
                        volunteers and providing them with the resources they need to create
                        positive change in their communities.
                    </p>
                    <button className="bg-primary px-10 py-4 text-lg rounded-lg text-white flex items-center font-bold hover:bg-black ease-out hover:ease-in duration-300">
                        Donate <BsArrowRightShort style={{ fontSize: 30 }} />
                    </button>
                </div>
                <div className=" max-w-[600px]" data-aos="fade-left" data-aos-duration="1000">
                    <Lottie animationData={math} loop />
                </div>
            </div>
        </div>
    );
}

export default Banner;
