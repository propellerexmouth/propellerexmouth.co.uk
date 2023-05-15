import Link from "next/link";
import React from "react";
import LogoLong from "./LogoLong";
import NavLinks from "./NavLinks";
import { MenuIcon } from "./Icons";

const Header = () => {
  return (
    <>
      <header className="hidden lg:flex w-full bg-white">
        <div id="desktop-header-container" className="mx-auto w-full max-w-6xl p-6">
          <div className="flex justify-between items-center">
            <h1 className="flex text-2xl items-center space-x-4">
              <Link href="/">
                <LogoLong />
              </Link>
            </h1>
            <nav className="flex items-center justify-between space-x-8">
              <NavLinks incHome={false} />
            </nav>
          </div>
        </div>
      </header>
      <header id="mobile-header-container" className="flex lg:hidden w-full bg-white">
        <div className="flex justify-between w-full items-center p-4">
          <h1 className="text-4xl items-center space-x-4">Propeller</h1>
          {/* <nav className="flex items-center justify-between space-x-8">
              <NavLinks incHome={false} />
            </nav> */}
          <MenuIcon className="h-12 w-12 px-2 py-1 stroke-2 cursor-pointer font-bold" />
        </div>
      </header>
    </>
  );
};

export default Header;
