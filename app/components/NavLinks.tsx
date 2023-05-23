import React from "react";
import Link from "next/link";

const NavLinks = ({ incHome = false, incContact = false }: { incHome: boolean; incContact: boolean }) => {
  return (
    <>
      {incHome && (
        <Link className="hover:underline" href="/">
          Home
        </Link>
      )}
      <Link className="hover:underline" href="/spaces">
        Spaces
      </Link>
      <Link className="hover:underline" href="/about">
        About
      </Link>
      <Link className="hover:underline" href="/community">
        Community
      </Link>
      <Link className="hover:underline" href="/events">
        Events
      </Link>
      {incContact && (
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      )}
    </>
  );
};

export default NavLinks;
