'use client';
import React, { useEffect, useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const SocialLinks = ({ size = 'md' }: { size?: 'sm'|'md'|'lg' }) => {
  const [linkSizeClass, setLinkSizeClass] = useState('w-8 h-8 p-2');
  const [gapSize, setGapSize] = useState('gap-2');

  useEffect(() => {
    switch (size) {
      case 'sm':
        setLinkSizeClass('w-6 h-6 p-1');
        setGapSize('gap-2');
        break;
      case 'lg':
        setLinkSizeClass('w-16 h-16 p-3');
        setGapSize('gap-4');
        break;
      default:
        setLinkSizeClass('w-8 h-8 p-2');
        setGapSize('gap-2');
        break;
    }
  }, [size]);

  return (
    <menu className={`inline-flex ${gapSize} text-primary-900 py-1`}>
      <li>
        <a target="_blank" rel="nofollow" href="https://www.facebook.com/propellerexmouth" className={`bg-white rounded-full ${linkSizeClass} block hover:scale-110 transition-all`}>
          <FacebookIcon className={`w-full h-full stroke-none`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://www.instagram.com/propellerexmouth/" className={`bg-white rounded-full ${linkSizeClass} block hover:scale-110 transition-all`}>
          <InstagramIcon className={`w-full h-full stroke-none`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://twitter.com/propellerexm" className={`bg-white rounded-full ${linkSizeClass} block hover:scale-110 transition-all`}>
          <TwitterIcon className={`w-full h-full stroke-none`} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" href="https://www.linkedin.com/company/propellerexmouth" className={`bg-white rounded-full ${linkSizeClass} block hover:scale-110 transition-all`}>
          <LinkedinIcon className={`w-full h-full stroke-none`} />
        </a>
      </li>
      {/*<li>
         <a className="font-mono" target="_blank" rel="nofollow" href="https://eventbrite.co.uk/o/propeller-exmouth-30738512963">
        eb
      </a>
      </li>*/}
    </menu>
  );
};

export default SocialLinks;
