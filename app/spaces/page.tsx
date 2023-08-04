"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { RightArrow } from "../components/Icons";
import SimpleHero from "../components/SimpleHero";
import OrdalocaBtn from "../components/OrdalocaBtn";
import MemberBenefits from "../components/MemberBenefits";

import "../../public/css/swiper.css";
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import { SwiperRef } from "@/types/swiper";

register();

const SpacesPage = () => {
  const [activeElement, setActiveElement] = useState("desks");

  const swiperElRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  };

  return (
      <div className="w-full bg-white">
        <SimpleHero
          content="Desk space, offices and meeting rooms for building businesses that can scale"
        />

        <div className="bg-secondary-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 flex align-top justify-between flex-col md:flex-row">
            <div className="w-full md:w-[25%]">

              <div className={activeElement === "desks" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActiveElement("desks")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Desks</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>

              <div className={activeElement === "offices" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActiveElement("offices")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Offices</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>

              <div className={activeElement === "meetings" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActiveElement("meetings")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Meeting Spaces</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[68%] mt-12 md:mt-0">

              <div className={activeElement === "desks" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Work alongside other entrepreneurs, creatives and engineers in our shared workspace
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="mb-4 font-bold uppercase">
                    Pricing
                  </h4>
                  <p className="mb-4">
                    *Prices are inclusive of VAT
                  </p>
                  <div className="flex items-center justify-between flex-wrap mb-4">
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Monthly dedicated desk
                      </p>
                      <p className="text-xl">
                        £264 per month*
                      </p>
                      <OrdalocaBtn className="mt-8" url="https://orda.to/5-5"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Daily hot desk
                      </p>
                      <p className="text-xl">
                        £18 per day*
                      </p>
                      <OrdalocaBtn className="mt-8" url="https://orda.to/5-1"/>
                    </div>
                  </div>
                  <a className="underline text-primary-900" href="/contact">Get in touch</a>
                </div>
              </div>

              <div className={activeElement === "offices" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Making the most of our shared facilities, while maintaining some privacy for your team
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="mb-4 font-bold uppercase">
                    Pricing
                  </h4>
                  <p className="mb-4">
                    *Prices are inclusive of VAT
                  </p>
                  <div className="flex items-center justify-between flex-wrap mb-4">
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        4 person office available now
                      </p>
                      <p className="text-xl">
                        <a href="/contact">Enquire now</a>
                      </p>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        8 person office available now
                      </p>
                      <p className="text-xl">
                        <a href="/contact">Enquire now</a>
                      </p>
                    </div>
                  </div>
                  <a className="underline text-primary-900" href="/contact">Get in touch</a>
                </div>
              </div>

              <div className={activeElement === "meetings" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Our meeting room is set up ready for in person and virtual meetings
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="mb-4 font-bold uppercase">
                    Pricing
                  </h4>
                  <p className="mb-4">
                    *Prices are inclusive of VAT
                  </p>
                  <div className="flex items-center justify-between flex-wrap mb-4">
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Per hour
                      </p>
                      <p className="text-xl">
                        from £30*
                      </p>
                      <OrdalocaBtn className="mt-8" url="https://orda.to/5-3"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Per day
                      </p>
                      <p className="text-xl">
                        from £114*
                      </p>
                      <OrdalocaBtn className="mt-8" url="https://orda.to/5-3"/>
                    </div>
                  </div>
                  <a className="underline text-primary-900" href="/contact">Get in touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-secondary-100 from-25% to-25% to-transparent py-16 w-full overflow-hidden">
          <div className="spaces-swiper mx-auto w-full max-w-6xl px-6 relative">

            <swiper-container
              ref={swiperElRef}
              slides-per-view={1}
              speed={1000}
              space-between={50}
            >
              <swiper-slide>
                <Image src="/images/Court-house.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy"/>
              </swiper-slide>
              <swiper-slide>
                <Image src="/images/bar-stairs.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy"/>
              </swiper-slide>
              <swiper-slide>
                <Image src="/images/inconf-room.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy"/>
              </swiper-slide>
            </swiper-container>

            <div className="next-arrow w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-primary-900 z-10 cursor-pointer" onClick={handleNext}>
              <RightArrow className="w-10 h-10 fill-primary-900"/>
            </div>
          </div>
        </div>

        <MemberBenefits title="Member benefits" />

      </div>
  );
};

export default SpacesPage;
