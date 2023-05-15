"use client";

import { useState } from "react";
import { MenuIcon } from "./Icons";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl items-center space-x-4">Propeller</h1>
        {/* <nav className="flex items-center justify-between space-x-8">
      <NavLinks incHome={false} />
    </nav> */}

        <button onClick={toggleMenu}>
          <MenuIcon className="h-12 w-12 px-2 py-1 stroke-2 cursor-pointer font-bold" />
        </button>
      </div>
      <div>
        {isOpen && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-2xl my-8" onClick={toggleMenu}>
              <NavLinks incHome={false} incContact={true} />
            </div>
            <div className="flex w-full text-2xl justify-evenly">
              <SocialLinks />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
