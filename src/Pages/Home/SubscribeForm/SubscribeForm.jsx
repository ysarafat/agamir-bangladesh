/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './SubscribeForm.css';

function SubscribeForm() {
    return (
        <div className="mt-16 bg_SubscribeForm">
            <div
                className="px-4 container mx-auto flex justify-center items-center flex-col py-14"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1 className="text-white text-2xl font-bold uppercase">Get our update</h1>
                <p className="sub_title text-white mt-3 mb-6">
                    The subscription form typically asks for the individual's name and email
                    address. Once the form is submitted, the individual will receive periodic emails
                    containing the latest updates and information related to the subscribed topic.
                </p>
                <form>
                    <input
                        className="max-w-full lg:w-[600px] outline-none border border-primary text-text-secondary h-[44px] rounded-s-lg px-3"
                        type="email"
                        placeholder="example@gmail.com"
                        required
                    />
                    <input
                        className="h-[44px] bg-primary px-5 text-white rounded-e-lg shadow-lg"
                        type="submit"
                        value="Subscribe"
                    />
                </form>
            </div>
        </div>
    );
}

export default SubscribeForm;
