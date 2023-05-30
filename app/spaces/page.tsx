"use client";
import React from "react";
import { RightArrow } from "../components/Icons";
import SimpleHero from "../components/SimpleHero";

const SpacesPage = () => {
  
  const handleClick = (e) => {
    const target = e.target;
    console.log(target);
    target.classList.add('is-active');
  }

  return (    
    <div className="w-full bg-white">
      <SimpleHero
        content="Desk space, offices and meeting rooms for building businesses that can scale"
      />
      <div className="bg-secondary-100">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 flex align-top justify-between flex-col md:flex-row">
          <div className="w-full md:w-[20%]">

            <div className="js-spaces-toggle group is-active block cursor-pointer" data-id="desks" onClick={handleClick}>
              <div className="flex items-center justify-between p-4 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                <span className="font-bold">Desks</span>
                <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900"/>
              </div>
            </div>

            <div className="js-spaces-toggle group block cursor-pointer" data-id="offices" onClick={handleClick}>
              <div className="flex items-center justify-between p-4 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                <span className="font-bold">Offices</span>
                <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900"/>
              </div>
            </div>

            <div className="js-spaces-toggle group block cursor-pointer" data-id="meeting" onClick={handleClick}>
              <div className="flex items-center justify-between p-4 mb-4 bg-white text-black border border-white group-[.is-active]:bg-primary-900 group-[.is-active]:text-white group-[.is-active]:border-primary-900">
                <span className="font-bold">Meeting Spaces</span>
                <RightArrow className="w-6 h-6 group-[.is-active]:fill-white fill-primary-900"/>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[70%] mt-12 md:mt-0">

            <div className="js-spaces-content group block is-active" data-id="desks-content">
              <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity delay-100 duration-500">
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
                  Prices are exclusive of VAT
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Pricing
                    </small>
                    <p className="text-xl">
                      £200 per month
                    </p>
                  </div>
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Daily hot desk
                    </small>
                    <p className="text-xl">
                      £15 per day
                    </p>
                  </div>
                </div>
                <a className="underline text-primary-900" href="/contact">Get in touch</a>
              </div>
            </div>

            <div className="js-spaces-content group block" data-id="offices-content">
              <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity delay-100 duration-500">
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
                  Prices are exclusive of VAT
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Pricing
                    </small>
                    <p className="text-xl">
                      £200 per month
                    </p>
                  </div>
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Daily hot desk
                    </small>
                    <p className="text-xl">
                      £15 per day
                    </p>
                  </div>
                </div>
                <a className="underline text-primary-900" href="/contact">Get in touch</a>
              </div>
            </div>

            <div className="js-spaces-content group block" data-id="meeting-content">
              <div className="group-[.is-active]:opacity-100 group-[.is-active]:max-h-screen max-h-0 opacity-0 overflow-hidden transition-opacity delay-100 duration-500">
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
                  Prices are exclusive of VAT
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Pricing
                    </small>
                    <p className="text-xl">
                      £200 per month
                    </p>
                  </div>
                  <div className="w-full md:w-[48%] border-2 text-center border-white p-8">
                    <small className="mb-4 font-bold text-primary-900 uppercase">
                      Daily hot desk
                    </small>
                    <p className="text-xl">
                      £15 per day
                    </p>
                  </div>
                </div>
                <a className="underline text-primary-900" href="/contact">Get in touch</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacesPage;
