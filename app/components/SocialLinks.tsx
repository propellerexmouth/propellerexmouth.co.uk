import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <menu className="flex space-x-2 text-red-600 py-1">
      <li>
        <a target="_blank" rel="nofollow" href="https://www.facebook.com/propellerexmouth">
          <FacebookIcon className={` bg-white rounded-full p-2 stroke-none h-8 w-8 ${className}`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://www.instagram.com/propellerexmouth/">
          <InstagramIcon className={` bg-white rounded-full p-2 h-8 w-8 stroke-none ${className}`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://twitter.com/propellerexm">
          <TwitterIcon className={` bg-white rounded-full p-2 h-8 w-8 stroke-none ${className}`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://www.linkedin.com/company/propellerexmouth">
          <LinkedinIcon className={` bg-white rounded-full p-2 h-8 w-8 ${className}`} />
        </a>
      </li>
      <li>
        {/* <a className="font-mono" target="_blank" rel="nofollow" href="https://eventbrite.co.uk/o/propeller-exmouth-30738512963">
        eb
      </a> */}
      </li>
    </menu>
  );
};

export default SocialLinks;
