import React from "react";
import Link from "next/link";

const NavLinks = ({ incHome }: { incHome: boolean }) => {
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
    </>
  );
};

export default NavLinks;
