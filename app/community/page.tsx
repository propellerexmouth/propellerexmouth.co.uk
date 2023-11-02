"use client";
import { useRef } from "react";
import Image from "next/image";
import { RightArrow } from "../components/Icons";
import Link from "next/link";
import SpacesSection from "../components/SpacesSection";


import Lottie from "lottie-react";
import shoes from '../../public/lotties/running-shoes.json';
import burger from '../../public/lotties/burger.json';
import swimming from '../../public/lotties/swimming-glasses.json';

import "../../public/css/swiper.css";
import 'swiper/css';
import "../../public/css/scrollbar.css";
import { register } from 'swiper/element/bundle';
import { SwiperRef } from "@/types/swiper";

register();

const CommunityPage = () => {
  const swiperElRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
  };

  return (
    <div className="bg-white w-full">
      <div className="w-full relative overflow-hidden">
        <div className="max-w-5xl absolute top-0 left-0 w-full h-full sm:min-w-[calc(32rem_+_40vw)]">
          <Image src="/images/Community.jpg" alt="App screenshot" width={1080} height={720} className="object-cover h-full w-full" />
        </div>
        <div className="max-w-6xl px-6 mx-auto flex justify-end items-center">
          <div className="mx-auto w-full max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 my-20 z-20 bg-primary-900 px-10 py-32">
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Community
            </h1>
            <p className="mt-8 text-lg leading-8 text-white font-bold">
              We are a community of like-minded people who share ideas and help each other to develop and grow our businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="py-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">
            Existing members
          </h3>
          <p>
            Existing members are drawn from a mixture of technical and creative backgrounds, but we all work within small businesses that have the capacity to grow.
          </p>
        </div>
        <div className="flex items-stretch justify-start w-full overflow-y-hidden overflow-x-scroll custom-scrollbar pb-4">
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/inconf.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/DataFiltr.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/ordaloca.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/pixel-fridge-logo.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/radiance.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/Simplyvideo.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/tvav.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
        </div>
      </div>

      <div className="py-20 w-full bg-secondary-100 overflow-hidden">
        <div className="w-full max-w-5xl px-6 mx-auto relative">
          <h3 className="text-primary-900 text-4xl font-bold mb-12 text-center">
            Community Stories
          </h3>

          <swiper-container
            ref={swiperElRef}
            slides-per-view={1}
            space-between={30}
            centered-slides={true}
            loop={true}
            speed={1000}
            watch-slides-progress={true}
          >
            
            <swiper-slide>
              <div className="flex community-slide">
                <div
                  className="
                    mr-2
                    relative
                    block
                    w-10 h-24
                    bg-primary-900
                  "
                ></div>
                <div
                  className="
                    mr-2
                    relative
                    block
                    w-20 h-40
                    bg-primary-900
                  "
                ></div>
                <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8">
                  <div className="w-full lg:w-[60%]">
                    <Image src="/images/ordaloca.png" alt="Ordaloca" width="200" height="200" className="object-contain h-8 w-auto mb-8" loading="lazy"/>
                    <p className="mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link href="https://ordaloca.com" className="text-primary-900 underline text-xl">
                      ordaloca.com
                    </Link>
                  </div>
                  <div className="w-full lg:w-[30%] flex justify-center lg:block mt-8 lg:mt-0">
                    <Image src="/images/team/Jim-Hill.jpg" alt="Jim Hill" width="200" height="200" className="object-contain h-40 w-40" loading="lazy"/>
                    <Image src="/images/team/Louis-Gillies.jpg" alt="Louis Gillies" width="200" height="200" className="object-contain h-40 w-40 -mt-8 lg:ml-auto lg:mr-0" loading="lazy"/>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div className="flex community-slide">
                <div
                  className="
                    mr-2
                    relative
                    block
                    w-10 h-24
                    bg-primary-900
                  "
                ></div>
                <div
                  className="
                    mr-2
                    relative
                    block
                    w-20 h-40
                    bg-primary-900
                  "
                ></div>
                <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8">
                  <div className="w-full lg:w-[60%]">
                    <Image src="/images/ordaloca.png" alt="Ordaloca" width="200" height="200" className="object-contain h-8 w-auto mb-8" loading="lazy"/>
                    <p className="mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link href="https://ordaloca.com" className="text-primary-900 underline text-xl">
                      ordaloca.com
                    </Link>
                  </div>
                  <div className="w-full lg:w-[30%] flex justify-center lg:block mt-8 lg:mt-0">
                    <Image src="/images/team/Jim-Hill.jpg" alt="Jim Hill" width="200" height="200" className="object-contain h-40 w-40" loading="lazy"/>
                    <Image src="/images/team/Louis-Gillies.jpg" alt="Louis Gillies" width="200" height="200" className="object-contain h-40 w-40 -mt-8 lg:ml-auto lg:mr-0" loading="lazy"/>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>

          <div className="next-arrow w-10 h-10 absolute top-1/2 right-full -translate-y-1/2 fill-primary-900 z-10 cursor-pointer" onClick={handlePrev}>
            <RightArrow className="w-10 h-10 fill-primary-900 rotate-180"/>
          </div>
          <div className="next-arrow w-10 h-10 absolute top-1/2 left-full -translate-y-1/2 fill-primary-900 z-10 cursor-pointer" onClick={handleNext}>
            <RightArrow className="w-10 h-10 fill-primary-900"/>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col w-full items-center my-32">
          <h3 className="text-primary-900 text-2xl font-bold mb-12">
            What’s on for members?
          </h3>
          <div className="flex justify-evenly w-full mb-12 flex-col lg:flex-row">
              <div className="flex items-center">
                <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                  <Lottie 
                    loop={true}
                    className="max-w-[75px] mx-auto"
                    autoplay={true}
                    animationData={shoes}
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
                    animationData={burger}
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
                    animationData={swimming}
                    height={75}
                    width={75}
                  />
                </div>
                <div className="p-4 text-sm">
                  <p>Our focus is on promoting and growing creative and tech based industries in Exmouth.</p>
                </div>
              </div>
          </div>
          {/* <Link href="/community" className="text-primary-900 underline text-xl">
            Find out more about our members
          </Link> */}
        </div>
      </div>
      
      <SpacesSection title="Spaces"/>

      <div className="py-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">
            Local businesses we love
          </h3>
        </div>
        <div className="flex items-stretch justify-start w-full overflow-y-hidden overflow-x-scroll custom-scrollbar pb-4">
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/cabin.png" alt="Cabin Coffee Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/grapevine.png" alt="Grapevine Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/henrys.png" alt="Henry's Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/hop.png" alt="Hop Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/sea-dog.png" alt="Sea Dog Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/strand-deli.png" alt="Strand Deli Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
        </div>
      </div>

    </div>
  );
};



export default CommunityPage;
