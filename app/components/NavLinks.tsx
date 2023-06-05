import React from "react";
import { CommunityIcon, SpacesIcon } from "./Icons";
import NavLink from "./NavLink";

const NavLinks = ({ incHome = false, incContact = false, showIcons = true }: { incHome: boolean; incContact: boolean, showIcons: boolean }) => {
  return (
    <>
      {incHome && (
        <NavLink href="/">
          Home
        </NavLink>
      )}
      <NavLink href="/community">
        {showIcons && <CommunityIcon className="w-6 h-6 inline-block fill-current" />}
        Community
      </NavLink>
      <NavLink href="/spaces">
        {showIcons && <SpacesIcon className="w-6 h-6 inline-block fill-current" />}
        Spaces
      </NavLink>
      <NavLink href="/about">
        About
      </NavLink>
      <NavLink href="/events">
        Events
      </NavLink>
      {incContact && (
        <NavLink href="/contact">
          Contact
        </NavLink>
      )}
    </>
  );
};

export default NavLinks;
