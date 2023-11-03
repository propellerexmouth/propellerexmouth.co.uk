import React from "react";
import { CommunityIcon, SpacesIcon } from "./Icons";
import NavLink from "./NavLink";

const NavLinks = ({ closeMenu, incHome = false, incContact = true, showIcons = true, onClick }: {closeMenu: any; incHome: boolean, incContact: boolean, showIcons: boolean, onClick: any}) => {
  return (
    <>
      {incHome && (
        <NavLink href="/" closeMenu={closeMenu} onClick={onClick}>
          Home
        </NavLink>
      )}
      <NavLink href="/community"  closeMenu={closeMenu} onClick={onClick}>
        {showIcons && <CommunityIcon className="w-6 h-6 inline-block fill-current" />}
        Community
      </NavLink>
      <NavLink href="/spaces"  closeMenu={closeMenu} onClick={onClick}>
        {showIcons && <SpacesIcon className="w-6 h-6 inline-block fill-current" />}
        Spaces
      </NavLink>
      <NavLink href="/about"  closeMenu={closeMenu} onClick={onClick}>
        About
      </NavLink>
      {incContact && (
        <NavLink className="block lg:hidden" href="/contact"  closeMenu={closeMenu} onClick={onClick}>
          Contact
        </NavLink>
      )}
    </>
  );
};

export default NavLinks;
