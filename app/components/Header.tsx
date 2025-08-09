'use client';

import React, { useEffect, useState } from "react";
import DynamicLogo from "./DynamicLogo";
import NavLinks from "./NavLinks";
import { CloseIcon, MenuIcon } from "./Icons";
import SocialLinks from "./SocialLinks";
import { TickerBar } from "./TickerBar";

const Header = ({ onClick }: { onClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove']("overflow-hidden");
    document.body.classList.add("lg:overflow-auto");
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="flex w-full relative">
        <div id="desktop-header-container" className="mx-auto w-full max-w-6xl p-6 ">
          <div className="flex justify-between items-center gap-12">
            <div className="flex text-4xl items-center z-[60]">
              <DynamicLogo onClick={closeMenu} closeMenu={closeMenu} />
            </div>
            <button onClick={toggleMenu} className="block lg:hidden z-[60]">{isOpen ? <CloseIcon className="h-12 w-12 px-2 py-1 stroke-2 cursor-pointer font-bold" /> : <MenuIcon className="h-12 w-12 px-2 py-1 stroke-2 cursor-pointer font-bold" />}</button>
            <div className={`fixed flex flex-col bg-white text-center z-50 top-0 left-0 right-0 h-full transition duration-300 -translate-x-full lg:static lg:translate-x-0  ${isOpen ? 'translate-x-0' : ''}`}>
              <div className="h-[96px] flex-shrink-0 lg:hidden"></div>
              <div className="overflow-auto p-12 lg:p-0">
                <nav className="mb-8 lg:mb-0 flex flex-col lg:flex-row items-center justify-center gap-12 text-xl lg:text-base">
                  <NavLinks closeMenu={closeMenu} incHome={false} incContact={true} showIcons={true} onClick={closeMenu} />
                </nav>
                <div className="lg:hidden mt-auto"><SocialLinks size="lg" /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TickerBar />
    </>
  );
};

export default Header;
