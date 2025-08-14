"use client";

import Link from "next/link";
import { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from "react";

const TickerBarItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex items-center">
      <span>{children}</span>
      <div className="inline-block mt-0 w-[15px] h-[19px] ml-[--marquee-gap]">
        <svg width="15" height="19" viewBox="0 0 15 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.44352 15.1634H4.16224V18.7741H0V0.225952H6.44352V15.1634Z" fill="white" />
          <path d="M10.9413 0.225952H7.54736V15.1634H10.9413V0.225952Z" />
          <path d="M14.2205 2.52856H12.1718V12.8607H14.2205V2.52856Z" />
        </svg>
      </div>
    </li>
  );
};

export const TickerBar = () => {
  const [amount, setAmount] = useState<number>(1);
  const [animationDuration, setAnimationDuration] = useState<string>("50s");
  const elementRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const wrapperRefCurrent = wrapperRef.current;
    const groupRefCurrent = groupRef.current;
    const elementRefCurrent = elementRef.current;
    const calculateAmount = () => {
      const wrapperWidth = wrapperRefCurrent?.clientWidth || 0;
      const groupWidth = groupRefCurrent?.clientWidth || 0;
      const elementWidth = elementRefCurrent?.clientWidth || 0;

      const calculatedAmount = Math.max(Math.ceil(elementWidth / groupWidth), 1, amount);
      setAnimationDuration(`${wrapperWidth / 50}s`);
      setAmount(calculatedAmount);
    };

    const resizeObserver = new ResizeObserver(() => {
      calculateAmount();
    });

    if (elementRefCurrent) {
      resizeObserver.observe(elementRefCurrent);
    }

    calculateAmount(); // Initial calculation

    return () => {
      if (elementRefCurrent) {
        resizeObserver.unobserve(elementRefCurrent);
      }
    };
  }, [amount]);

  return (
    <div ref={elementRef} className="[--marquee-gap:2.5rem] group relative flex py-2 bg-secondary-900 text-white select-none overflow-hidden gap-[--marquee-gap]" style={{ "--marquee-animation-duration": animationDuration } as CSSProperties}>
      {[...Array(2)].map((_, index) => (
        <div
          data-banner-scroll-wrapper
          aria-hidden={index > 0}
          key={index}
          ref={index === 0 ? wrapperRef : null} // Only set ref on the first index
          className="shrink-0 flex items-center gap-[--marquee-gap] animate-marquee group-hover:[animation-play-state:paused]"
        >
          {[...Array(amount)].map((_, amountIndex) => (
            <ul ref={amountIndex === 0 && index === 0 ? groupRef : null} key={amountIndex} data-banner-scroll-group className="flex gap-[--marquee-gap]">
              <TickerBarItem key="desks">
                Hot desks available -{" "}
                <Link href="/spaces#desks" tabIndex={amountIndex > 0 || index > 0 ? -1 : undefined} className="underline underline-offset-2 cursor-pointer">
                  book now
                </Link>
              </TickerBarItem>
              <TickerBarItem key="offices">
                Offices available now -{" "}
                <Link href="/spaces#offices" tabIndex={amountIndex > 0 || index > 0 ? -1 : undefined} className="underline underline-offset-2 cursor-pointer">
                  enquire
                </Link>
              </TickerBarItem>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};
