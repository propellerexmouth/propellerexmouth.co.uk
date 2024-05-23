import React from "react";
import { EmailIcon, PhoneIcon, PinIcon } from "./Icons";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white bg-black ">
      <div className="flex flex-col mx-auto items-start justify-between px-8 py-16 lg:py-24 lg:px-24 max-w-6xl md:flex-row space-y-8">
        <div id="footer-col-1" className="space-y-8">
          <h2 className="space-x-1 text-2xl">
            <span className="font-bold">Propeller</span>
            <span>:</span>
            <span>Exmouth</span>
          </h2>
          <SocialLinks />
          <div>
            <small className="block">Company no: 11760416</small>
            <small className="block">VAT no: GB388252954</small>
          </div>
        </div>
        <nav className="flex flex-col gap-4 justify-start">
          <NavLinks closeMenu={''} onClick={''} showIcons={false} incHome={true} incContact={true} />
        </nav>
        <div id="contact-details" className="space-y-8 ">
          <div id="email" className="flex space-x-2">
            <EmailIcon className="flex-shrink-0" />
            <span className="not-italic"><a href="mailto:hello@propellerexmouth.co.uk">hello@propellerexmouth.co.uk</a></span>
          </div>
          <div id="address" className="flex space-x-2">
            <PinIcon className="flex-shrink-0" />
            <address className="not-italic">15 Victoria Road, Exmouth, Devon, EX8 1DL</address>
          </div>
          <div id="what3words" className="block">
            <Link className="flex items-center space-x-2" href="https://w3w.co/keeps.nation.knee" target="_blank">
              
              <>
                <span className="sr-only">What3Words Icon</span>
                <svg className="" width="24" height="24" viewBox="0 0 55 55" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.65 47.33a2.75 2.75 0 0 1-2.6-3.6L31.02 10.8a2.74 2.74 0 1 1 5.2 1.74L25.26 45.46a2.74 2.74 0 0 1-2.6 1.87ZM6.2 47.33a2.75 2.75 0 0 1-2.6-3.6L14.56 10.8a2.74 2.74 0 0 1 5.2 1.74L8.8 45.46a2.74 2.74 0 0 1-2.6 1.87ZM39.1 47.33a2.75 2.75 0 0 1-2.6-3.6L47.49 10.8a2.74 2.74 0 0 1 5.2 1.74L41.71 45.46a2.74 2.74 0 0 1-2.6 1.87Z" fill="white"/></svg>
              </>
              <p>keeps.nation.knee</p>
            </Link>
          </div>
          <div id="phone" className="flex space-x-2">
            <PhoneIcon className="flex-shrink-0" />
            <span className="not-italic"><a href="tel:01395263509">01395 263509</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
