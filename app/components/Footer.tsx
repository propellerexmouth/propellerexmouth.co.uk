import React from "react";
import { EmailIcon, PhoneIcon, PinIcon } from "./Icons";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className=" text-white bg-black ">
      <div className="flex flex-col mx-auto justify-between p-24 max-w-6xl md:flex-row space-y-8">
        <div id="footer-col-1" className="space-y-8">
          <h2 className="space-x-1 text-2xl">
            <span className="font-bold">Propeller</span>
            <span>:</span>
            <span>Exmouth</span>
          </h2>
          <SocialLinks />
        </div>
        <nav className="flex flex-col space-y-4 underline">
          <NavLinks incHome={true} incContact={true} />
        </nav>
        <div id="contact-details" className="space-y-8 ">
          <div id="email" className="flex space-x-2">
            <EmailIcon className="flex-shrink-0" />
            <span className="not-italic">team@propellerexmouth.co.uk</span>
          </div>
          <div id="address" className="flex space-x-2">
            <PinIcon className="flex-shrink-0" />
            <address className="not-italic">15 Victoria Road, Exmouth, Devon, EX8 1DL</address>
          </div>
          <div id="phone" className="flex space-x-2">
            <PhoneIcon className="flex-shrink-0" />
            <span className="not-italic">01395 263509</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
