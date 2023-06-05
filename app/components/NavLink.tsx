import Link from "next/link";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <>
        <Link className="hover:border-primary-900 hover:text-primary-900 inline-flex items-center gap-2 duration-300 transition-colors border-b border-transparent pb-2" href={href}>{children}</Link>
      </>
    );
};


export default NavLink;
