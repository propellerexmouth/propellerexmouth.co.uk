"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import React from "react";
import SpacesSection from "./components/SpacesSection";
import MemberBenefits from "./components/MemberBenefits";
import social from '../public/lotties/social-media.json';
import idea from '../public/lotties/idea.json';
import rocket from '../public/lotties/rocket.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HomePage = () => {
  return (
    <div className="bg-white w-full">
      <div className="relative max-w-6xl px-6 mx-auto overflow-hidden">
        <div className="flex">
          <div className="flex h-fit w-full lg:w-[48%]">
            <div className="hidden md:block mt-10 lg:mt-20 w-full h-full px-3 py-20 relative overflow-hidden z-10 mr-2 before:absolute before:inset-0 before:z-[-10] before:block before:w-full before:h-full before:bg-primary-900"></div>
            <div className="hidden md:block mt-10 lg:mt-20 w-full h-full px-4 py-28 relative overflow-hidden z-10 mr-2 before:absolute before:inset-0 before:z-[-10] before:block before:w-full before:h-full before:bg-primary-900"></div>
            <div className="mx-auto flex-shrink-0 max-w-full md:max-w-[80%] lg:mx-0 lg:max-w-xl lg:pt-8 mt-10 lg:mt-20 mb-40 z-20 bg-primary-900 p-10">
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">More than a work space</h1>
              <p className="mt-8 text-lg leading-8 text-white font-bold">We are a community of like-minded people who share ideas and help each other to develop and grow our businesses.</p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link href="/contact" className="rounded-md underline px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  Get in touch
                </Link>
                <Link href="contact" className="text-sm underline font-semibold leading-6 text-white">
                  Find us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 lg:relative w-full mx-auto max-w-none md:max-w-2xl mt-0 lg:-ml-10 lg:mr-0 lg:max-w-none xl:-ml-64 z-1">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-full h-full lg:h-auto">
              <Image src="/images/DSC_0112.jpg" alt="App screenshot" width={1080} height={720} className="w-[60rem] h-full lg:h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-6xl px-6 mx-auto overflow-hidden">
        <div className="flex flex-col w-full items-center mt-10 mb-20">
          <h1 className="text-primary-900 text-4xl font-bold mb-12">The Propeller Community</h1>
          <div className="flex justify-evenly w-full mb-12 flex-col lg:flex-row gap-4">
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                  <Lottie 
                    loop={true}
                    className="max-w-[75px] mx-auto"
                    autoplay={true}
                    animationData={social}
                    height={75}
                    width={75}
                  />
              </div>
              <div className="p-4 text-sm">
                <p>Propeller is not just a co-working space, it&apos;s a not-for-profit, volunteer-run venture.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                <Lottie 
                  loop={true}
                  className="max-w-[75px] mx-auto"
                  autoplay={true}
                  animationData={idea}
                  height={75}
                  width={75}
                />
              </div>
              <div className="p-4 text-sm">
                <p>We are building a community of like-minded people and businesses that share ideas.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                <Lottie 
                  loop={true}
                  className="max-w-[75px] mx-auto"
                  autoplay={true}
                  animationData={rocket}
                  height={75}
                  width={75}
                />
              </div>
              <div className="p-4 text-sm">
                <p>Our focus is on promoting and growing creative and tech based industries in Exmouth.</p>
              </div>
            </div>
          </div>
          <Link href="/community" className="text-primary-900 underline text-xl">
            Find out more about our members
          </Link>
        </div>
      </div>
      <SpacesSection />
      <MemberBenefits title="Member benefits" />
    </div>
  );
};

export default HomePage;
