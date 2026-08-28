import React from "react";
import DynamicLogo from "./DynamicLogo";
import SocialLinks from "./SocialLinks";
import { EmailIcon, PhoneIcon } from "./Icons";

const HoldingPage = () => {
  return (
    <div className="bg-white w-full">
      <div className="relative flex min-h-screen max-w-6xl flex-col px-6 py-6 mx-auto overflow-hidden">
        <div className="flex text-4xl items-center">
          <DynamicLogo />
        </div>
        <div className="flex my-auto py-10">
          <div className="hidden md:block mt-10 lg:mt-20 w-full h-full px-3 py-20 relative overflow-hidden z-10 mr-2 before:absolute before:inset-0 before:z-[-10] before:block before:w-full before:h-full before:bg-primary-900"></div>
          <div className="hidden md:block mt-10 lg:mt-20 w-full h-full px-4 py-28 relative overflow-hidden z-10 mr-2 before:absolute before:inset-0 before:z-[-10] before:block before:w-full before:h-full before:bg-primary-900"></div>
          <div className="mx-auto flex-shrink-0 max-w-full md:max-w-[80%] lg:mx-0 lg:max-w-3xl mt-10 lg:mt-20 z-20 bg-primary-900 p-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">We have moved down the road, so are closed for a few days while we get set up in our new home.</h1>
            <p className="mt-8 text-lg leading-8 text-white font-bold">Follow us on socials to keep up to date, looking forward to seeing you in our new space.</p>
            <div className="mt-8">
              <SocialLinks size="lg" platforms={["facebook", "instagram"]} />
            </div>
          </div>
        </div>
        <div id="contact-details" className="flex flex-col gap-4 pb-10 md:flex-row md:gap-12">
          <div id="email" className="flex space-x-2">
            <EmailIcon className="flex-shrink-0" />
            <span className="not-italic"><a className="hover:underline" href="mailto:hello@propellerexmouth.co.uk">hello@propellerexmouth.co.uk</a></span>
          </div>
          <div id="phone" className="flex space-x-2">
            <PhoneIcon className="flex-shrink-0" />
            <span className="not-italic"><a className="hover:underline" href="tel:01395263509">01395 263509</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingPage;
