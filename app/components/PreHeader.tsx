import Link from "next/link";
import React from "react";
import { UpRightArrow } from "./Icons";
import SocialLinks from "./SocialLinks";

const PreHeader = () => {
  return (
    <nav className="hidden lg:flex w-full bg-zinc-100 px-6">
      <div id="social-container" className="mx-auto max-w-6xl py-2 flex w-full justify-end items-center space-x-12">
        <Link className="hover:underline flex items-center space-x-1" href="/contact">
          <span>Contact</span>
          <UpRightArrow className="text-red-500 h-4 w-4" />
        </Link>
        <SocialLinks />
      </div>
    </nav>
  );
};

export default PreHeader;
