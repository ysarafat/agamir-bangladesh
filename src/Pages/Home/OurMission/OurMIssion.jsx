import React, { useEffect, useState } from 'react';

function OurMIssion() {
    const [mission, setMission] = useState([]);
    useEffect(() => {
        fetch('/Data/mission.json')
            .then((res) => res.json())
            .then((data) => setMission(data));
    }, []);
    console.log(mission);
    return (
        <div className="bg-[#F9F9FF] py-14">
            <h1 className="heading-text">our mission</h1>
            <div className="border-4 border-slate-200 w-20 mx-auto rounded-lg mt-2" />
            <p className="container mx-auto text-center px-4 lg:px-40 sub_title mt-2">
                By joining the mission, individuals can contribute their skills, knowledge, and
                resources towards the achievement of the collective objective.It is an opportunity
                to be a part of something bigger than oneself and to make a meaningful contribution
                to society.
            </p>
            <div className="container mx-auto px-4 mt-6 ">
                <div className="flex gap-6 text-center justify-center flex-col lg:flex-row">
                    {mission?.map((m) => (
                        <div
                            className="bg-white rounded-lg shadow hover:shadow-xl  p-6 lg:w-1/3"
                            data-aos="flip-up"
                            data-aos-duration="1000"
                        >
                            <img className="h-40 w-40 mx-auto mb-3" src={m.icon} alt="" />
                            <h4 className="text-center text-xl font-bold uppercase">{m.title}</h4>
                            <p className="sub_title mt-2">{m.s_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurMIssion;
