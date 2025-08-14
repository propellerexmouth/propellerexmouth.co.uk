"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RightArrow } from "../components/Icons";
import SimpleHero from "../components/SimpleHero";
import MemberBenefits from "../components/MemberBenefits";

import "../../public/css/swiper.css";
import { register } from 'swiper/element/bundle';
import { SwiperRef } from "@/types/swiper";
import AppButton from "../components/AppButton";

register();

const SpacesPage = () => {
  const [activeElement, setActiveElement] = useState("membership");

  const swiperElRef = useRef<SwiperRef>(null);

  const setActive = (active: string) => {
    window.location.hash = `#${active}`;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveElement(hash);
      }
    };

    // Set the active element based on the initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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

              <div className={activeElement === "membership" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActive("membership")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">24/7 Membership</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>

              <div className={activeElement === "desks" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActive("desks")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Desks</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>

              <div className={activeElement === "offices" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActive("offices")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Offices</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>

              <div className={activeElement === "meetings" ? "group is-active block cursor-pointer" : "group block cursor-pointer"} onClick={() => setActive("meetings")}>
                <div className="flex items-center justify-between p-6 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                  <span className="font-bold">Meeting Spaces</span>
                  <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900 group-[.is-active]:rotate-90 group-[.is-active]:md:rotate-0 transition-all"/>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[68%] mt-12 md:mt-0">

              <div className={activeElement === "membership" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-[2000px] max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Work alongside other entrepreneurs, creatives and engineers in our shared workspace with 24/7 access and all member benefits
                  </h4>
                  <p className="mb-4">
                    Monthly membership is the perfect solution for entrepreneurs or small business owners who need workspace without the hassle of office setup and long-term rentals.
                  </p>
                  <p className="mb-4">
                    <ul>
                      <li>✅ 24/7 access</li>
                      <li>✅ Access to the Shower</li>
                      <li>✅ Break out community areas</li>
                      <li>✅ Kitchen facilities (hot water, fridge, microwave, crockery)</li>
                      <li>✅ Free complimentary tea / coffee services</li>
                      <li>✅ Members platform/social meet ups</li>
                      <li>✅ On-site bike-storage facilities</li>
                    </ul>
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
                        Monthly dedicated desk (24/7)
                      </p>
                      <p className="text-xl">
                        £264 per month*
                      </p>
                      <AppButton className="mt-8" label="Join Now" url="https://app.propellerexmouth.co.uk/suite/organizations/ce381a20-e223-11ee-9fd2-230857dc86d3/membership/plans/a9823bb0-e2b0-11ee-8600-874994c823e6" target="_blank"/>
                    </div>
                  </div>
                  <a className="underline text-primary-900" href="/contact">Get in touch</a>
                </div>
              </div>
              
              <div className={activeElement === "desks" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-[2000px] max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Work alongside other entrepreneurs, creatives and engineers in our shared workspace
                  </h4>
                  <p className="mb-4">
                    Hot Desk Hire is the perfect solution for entrepreneurs or small business owners who need workspace without the hassle of office setup and long-term rentals.
                  </p>
                  <p className="mb-4">
                    <ul>
                      <li>✅ Access between 08:45 until 17:00 (Monday to Friday, except Bank Holidays)</li>
                      <li>✅ Break out community areas.</li>
                      <li>✅ Kitchen facilities (hot water, fridge, microwave, crockery).</li>
                      <li>✅ Free complimentary tea / coffee services.</li>
                      <li>✅ You can be included on our community members platform/social meet ups.</li>
                      <li>✅ On-site bike-storage facilities.</li>
                    </ul>
                  </p>
                  <h4 className="mb-4 font-bold uppercase">
                    Pricing
                  </h4>
                  <p className="mb-4">
                    *Prices are inclusive of VAT
                  </p>
                  <div className="flex items-center justify-between flex-wrap mb-4">
                    <div className="w-full md:w-[48%] my-8 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Single hot desk
                      </p>
                      <p className="text-xl">
                        £18 per day*
                      </p>
                      <AppButton className="mt-8" url="https://app.propellerexmouth.co.uk/suite/organizations/ce381a20-e223-11ee-9fd2-230857dc86d3/desks" target="_blank"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        4 day hot desk
                      </p>
                      <p className="text-xl">
                        £60 per month*
                      </p>
                      <AppButton className="mt-8" url="https://app.propellerexmouth.co.uk/suite/organizations/ce381a20-e223-11ee-9fd2-230857dc86d3/membership/plans/d5b2e170-e518-11ee-8f3d-31c040751320" target="_blank"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        8 day hot desk
                      </p>
                      <p className="text-xl">
                        £120 per month*
                      </p>
                      <AppButton className="mt-8" url="https://app.propellerexmouth.co.uk/suite/organizations/ce381a20-e223-11ee-9fd2-230857dc86d3/membership/plans/6f7c3f50-e51d-11ee-937b-e32fb13778b1" target="_blank"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Dedicated desk
                      </p>
                      <p className="text-xl">
                        with 24/7 access
                      </p>
                      <button className="mt-8 ordaloca-btn" onClick={() => setActive("membership")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <span className="ordaloca-btn-txt">
                          View Membership
                        </span>
                      </button>
                    </div>
                  </div>
                  <a className="underline text-primary-900" href="/contact">Get in touch</a>
                </div>
              </div>

              <div className={activeElement === "offices" ? "group is-active block" : "group block"}>
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-[2000px] max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Making the most of our shared facilities, while maintaining some privacy for your team
                  </h4>
                  <p className="mb-4">
                  Whether you need an individual desk, a team space, or a larger private office, our wide selection of desks and chair options are tailored to fit your needs. With our monthly desk hire, you can enjoy all the benefits of a professional workspace without any of the long-term commitment.
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
                <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-[2000px] max-h-0 opacity-0 overflow-hidden transition-opacity duration-500">
                  <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
                    Our meeting room is set up ready for in person and virtual meetings
                  </h4>
                  <p className="mb-4">
                    The John Petty Meeting Room comfortably sits 10 people. It&apos;s equipped with comfortable seating and a large table, as well as a wired/wireless TV connection, Logitech conference cam and a whiteboard.
                    The room also comes with access to our hi-speed WiFi and complimentary refreshments.
                    Whether it&apos;s a collaborative brainstorming session or a private gathering, the Propeller meeting room is the ideal space for any occasion.
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
                      <AppButton className="mt-8" url="https://rooms.propellerexmouth.app" target="_blank"/>
                    </div>
                    <div className="w-full md:w-[48%] my-4 md:my-0 border-2 text-center border-white p-8">
                      <p className="mb-4 text-lg font-bold text-primary-900">
                        Per day
                      </p>
                      <p className="text-xl">
                        from £114*
                      </p>
                      <AppButton className="mt-8" url="https://rooms.propellerexmouth.app" target="_blank"/>
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
                <Image src="/images/Court-house.jpg" alt="The Court House at Propeller Exmouth, showcasing hot desks and office and sofa huddle area" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy" />
              </swiper-slide>
              <swiper-slide>
                <Image src="/images/bar-stairs.jpg" alt="Multiple Propeller Exmouth community members surrounding a Cross Anchor Brewery mobile bar at a Propeller Event" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy" />
              </swiper-slide>
              <swiper-slide>
                <Image src="/images/inconf-room.jpg" alt="Multiple Propeller Exmouth community members working in The Old Stables room" className="object-cover h-full w-full aspect-square" width="500" height="500" loading="lazy" />
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
