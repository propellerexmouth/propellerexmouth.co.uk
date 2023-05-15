import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const SocialLinks = () => {
  return (
    <div className="flex space-x-2 text-red-600 py-1">
      <a className="font-mono" target="_blank" rel="nofollow" href="https://www.facebook.com/propellerexmouth">
        <FacebookIcon className={"text-red-600 bg-white rounded-full p-2 stroke-none h-8 w-8"} />
      </a>
      <a className="font-mono" target="_blank" rel="nofollow" href="https://www.instagram.com/propellerexmouth/">
        <InstagramIcon className={"text-red-600 bg-white rounded-full p-2 h-8 w-8 stroke-none"} />
      </a>
      <a className="font-mono" target="_blank" rel="nofollow" href="https://twitter.com/propellerexm">
        <TwitterIcon className={"text-red-600 bg-white rounded-full p-2 h-8 w-8 stroke-none"} />
      </a>
      <a className="font-mono" target="_blank" rel="nofollow" href="https://www.linkedin.com/company/propellerexmouth">
        <LinkedinIcon className={"text-red-600 bg-white rounded-full p-2 h-8 w-8"} />
      </a>
      {/* <a className="font-mono" target="_blank" rel="nofollow" href="https://eventbrite.co.uk/o/propeller-exmouth-30738512963">
        eb
      </a> */}
    </div>
  );
};

export default SocialLinks;
