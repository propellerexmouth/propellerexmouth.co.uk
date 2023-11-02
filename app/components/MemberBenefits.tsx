"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import clock from '../../public/lotties/clock.json';
import meteor from '../../public/lotties/meteor-rain.json';
import wave from '../../public/lotties/wave.json';
import coffee from '../../public/lotties/coffee-cup.json';
import sunrise from '../../public/lotties/sunrise.json';
import cycling from '../../public/lotties/cycling.json';

const MemberBenefits = ({ title, content }: { title?: string; content?: string; }) => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 my-20">
            <div className="flex flex-col w-full items-center">

                {title && <h3 className="text-primary-900 text-4xl font-bold mb-12">{title}</h3>}
                {content && <p>{content}</p>}

                <div className="flex justify-evenly flex-wrap w-full mb-12">
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={clock}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            24 hour access to desks, sofas, meeting spaces, kitchen and internet
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={meteor}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            Time with other entrepreneurs that you can share ideas with
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={wave}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            Free access to talks and lectures from successful entrepreneurs and makers
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={coffee}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            Free tea and coffee and biscuits
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={sunrise}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            An awesome location, close to the sea, estuary, bars, shops and transport
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <Lottie 
                            loop={true}
                            className="max-w-[75px] mx-auto"
                            autoplay={true}
                            animationData={cycling}
                            height={75}
                            width={75}
                        />
                        <p className="p-4 text-sm">
                            Storage lockers, showers and secure bike storage
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberBenefits;
