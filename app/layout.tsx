import "./globals.css";

import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";

import logoImage from "../public/images/mark-3.png";
import { EmailIcon } from "@/public/icons/email";

const archia = localFont({
  src: "../public/fonts/archia-regular-webfont.woff2",
  variable: "--font-archia",
  display: "swap",
});

export const metadata = {
  title: "Propeller Exmouth",
  description: "A not-for-profit community driven co-working space with a bias towardes the creative and digital sector, that is 5 minutes from the beach!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archia.variable} font-sans`}>
      <body>
        <nav className="w-full bg-zinc-100">
          <div id="header-container" className="mx-auto max-w-6xl p-2 flex justify-end items-center space-x-8">
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
            <div id="hedaer-social-links" className="space-x-2 text-red-600 text-xs py-1">
              <a className="bg-white rounded-full p-2 h-8 w-8 font-mono" target="_blank" rel="nofollow" href="https://www.facebook.com/propellerexmouth">
                fb
              </a>
              <a className="bg-white rounded-full p-2 h-8 w-8 font-mono" target="_blank" rel="nofollow" href="https://www.instagram.com/propellerexmouth/">
                ig
              </a>
              <a className="bg-white rounded-full p-2 h-8 w-8 font-mono" target="_blank" rel="nofollow" href="https://twitter.com/propellerexm">
                tw
              </a>
              <a className="bg-white rounded-full p-2 h-8 w-8 font-mono" target="_blank" rel="nofollow" href="https://www.linkedin.com/company/propellerexmouth">
                li
              </a>
              <a className="bg-white rounded-full p-2 h-8 w-8 font-mono" target="_blank" rel="nofollow" href="https://eventbrite.co.uk/o/propeller-exmouth-30738512963">
                eb
              </a>
            </div>
          </div>
        </nav>
        <header className="w-full bg-white">
          <div id="header-container" className="mx-auto max-w-6xl py-6">
            <div className="flex justify-between items-center">
              <h1 className="flex text-2xl items-center space-x-4">
                <svg width="291" height="28" viewBox="0 0 291 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_134_5967)">
                    <g clipPath="url(#clip1_134_5967)">
                      <path
                        d="M33.6401 27.6531V6.1986H37.7234V8.15974C38.2877 7.42529 39.0142 6.83124 39.8461 6.424C40.6779 6.01675 41.5927 5.80733 42.5189 5.81209C46.5056 5.81209 49.4008 8.7717 49.4008 13.9501C49.4008 19.1285 46.5056 22.1204 42.5189 22.1204C41.5891 22.1264 40.6709 21.9142 39.8381 21.5009C39.0052 21.0875 38.2809 20.4846 37.7234 19.7405V27.6531H33.6401ZM41.2306 9.44809C40.5516 9.4648 39.8847 9.63204 39.2782 9.93777C38.6717 10.2435 38.1407 10.6801 37.7234 11.216V16.7165C38.145 17.2476 38.677 17.6808 39.2826 17.986C39.8882 18.2913 40.5528 18.4613 41.2306 18.4844C43.5782 18.4844 45.1672 16.6521 45.1672 13.9501C45.1672 11.2482 43.5818 9.44809 41.2306 9.44809Z"
                        fill="black"
                      />
                      <path
                        d="M51.6518 6.19829H55.7494V8.32047C56.3489 7.57637 57.1015 6.97005 57.9562 6.54273C58.8108 6.1154 59.7475 5.8771 60.7024 5.84399V9.84143C60.3337 9.75753 59.9569 9.71433 59.5787 9.7126C58.2259 9.7126 56.4258 10.4856 55.7494 11.4805V21.7407H51.6518V6.19829Z"
                        fill="black"
                      />
                      <path
                        d="M61.429 13.95C61.429 9.54463 64.5138 5.81201 69.6278 5.81201C74.7418 5.81201 77.8589 9.54463 77.8589 13.95C77.8589 18.3555 74.7705 22.1203 69.6278 22.1203C64.4852 22.1203 61.429 18.3913 61.429 13.95ZM73.6181 13.95C73.6181 11.538 72.1687 9.44802 69.6278 9.44802C67.0869 9.44802 65.6912 11.538 65.6912 13.95C65.6912 16.3621 67.1048 18.4843 69.6278 18.4843C72.1508 18.4843 73.6181 16.3943 73.6181 13.95Z"
                        fill="black"
                      />
                      <path
                        d="M80.0848 27.6531V6.19858H84.1646V8.15972C84.7285 7.42576 85.4544 6.83201 86.2857 6.42479C87.1169 6.01756 88.0309 5.80787 88.9565 5.81207C92.9468 5.81207 95.842 8.77168 95.842 13.9501C95.842 19.1285 92.9468 22.1204 88.9565 22.1204C88.0273 22.1261 87.1097 21.9138 86.2775 21.5004C85.4452 21.0871 84.7215 20.4843 84.1646 19.7405V27.6531H80.0848ZM87.6718 9.44808C86.9927 9.46428 86.3257 9.63131 85.7191 9.93707C85.1125 10.2428 84.5815 10.6797 84.1646 11.216V16.7165C84.5859 17.248 85.1178 17.6814 85.7235 17.9867C86.3291 18.292 86.9939 18.4618 87.6718 18.4844C90.0194 18.4844 91.6084 16.6521 91.6084 13.9501C91.6084 11.2482 90.0194 9.44808 87.6718 9.44808Z"
                        fill="black"
                      />
                      <path
                        d="M105.136 5.81201C109.767 5.81201 112.92 9.28697 112.92 14.3688V15.2706H101.371C101.629 17.2317 103.203 18.8708 105.841 18.8708C107.272 18.8708 108.994 18.2946 109.992 17.3284L111.782 19.9659C110.239 21.3974 107.795 22.1131 105.379 22.1131C100.652 22.1131 97.0838 18.9281 97.0838 13.9429C97.0946 9.44801 100.405 5.81201 105.136 5.81201ZM101.307 12.5042H108.962C108.865 11.0227 107.834 9.06151 105.136 9.06151C102.595 9.06151 101.5 10.9582 101.307 12.5042Z"
                        fill="black"
                      />
                      <path d="M115.071 0.282715H119.157V21.7336H115.071V0.282715Z" fill="black" />
                      <path d="M122.403 0.282715H126.49V21.7336H122.403V0.282715Z" fill="black" />
                      <path
                        d="M136.779 5.81201C141.414 5.81201 144.563 9.28697 144.563 14.3688V15.2706H133.018C133.276 17.2317 134.85 18.8708 137.488 18.8708C138.937 18.8708 140.641 18.2946 141.639 17.3284L143.428 19.9659C141.882 21.3974 139.438 22.1131 137.026 22.1131C132.299 22.1131 128.731 18.9281 128.731 13.9429C128.756 9.44801 132.052 5.81201 136.779 5.81201ZM132.953 12.5042H140.608C140.512 11.0227 139.481 9.06151 136.779 9.06151C134.238 9.06151 133.147 10.9582 132.953 12.5042Z"
                        fill="black"
                      />
                      <path
                        d="M146.717 6.19829H150.804V8.32047C151.403 7.57566 152.155 6.96885 153.01 6.54146C153.865 6.11407 154.802 5.87616 155.757 5.84399V9.84143C155.387 9.75733 155.009 9.71413 154.63 9.7126C153.281 9.7126 151.477 10.4856 150.804 11.4805V21.7407H146.717V6.19829Z"
                        fill="black"
                      />
                      <path
                        d="M167.012 5.9729C167.528 5.9729 168.031 6.12571 168.46 6.41199C168.888 6.69826 169.222 7.10515 169.419 7.58121C169.616 8.05727 169.668 8.58111 169.567 9.08649C169.467 9.59187 169.219 10.0561 168.854 10.4205C168.49 10.7848 168.026 11.0329 167.521 11.1335C167.015 11.234 166.491 11.1824 166.015 10.9852C165.539 10.788 165.132 10.4541 164.846 10.0256C164.56 9.5972 164.407 9.09349 164.407 8.57821C164.415 7.88983 164.692 7.23201 165.179 6.74522C165.666 6.25843 166.324 5.98126 167.012 5.9729ZM167.012 16.8773C167.528 16.8773 168.031 17.0301 168.46 17.3164C168.888 17.6026 169.222 18.0095 169.419 18.4856C169.616 18.9617 169.668 19.4855 169.567 19.9909C169.467 20.4963 169.219 20.9605 168.854 21.3248C168.49 21.6892 168.026 21.9374 167.521 22.0379C167.015 22.1384 166.491 22.0868 166.015 21.8896C165.539 21.6924 165.132 21.3585 164.846 20.9301C164.56 20.5016 164.407 19.9979 164.407 19.4826C164.415 18.7942 164.692 18.1364 165.179 17.6496C165.666 17.1628 166.324 16.8856 167.012 16.8773Z"
                        fill="black"
                      />
                      <path d="M179.613 5.50415H189.905V6.77101H181.005V12.7797H189.741V14.0466H181.005V20.4883H189.913V21.7516H179.613V5.50415Z" fill="black" />
                      <path d="M199.153 14.4115L193.506 21.7336H191.741L198.301 13.4202L192.121 5.51123H193.91L199.167 12.3967L204.446 5.51123H206.199L200.044 13.3844L206.564 21.73H204.836L199.153 14.4115Z" fill="black" />
                      <path d="M222.805 7.33646L216.893 21.7409H216.356L210.419 7.33646V21.7409H209.034V5.50415H211.102L216.624 18.9602L222.125 5.50415H224.218V21.7337H222.787L222.805 7.33646Z" fill="black" />
                      <path
                        d="M235.509 5.2356C240.255 5.2356 243.382 8.88591 243.382 13.6313C243.382 18.3767 240.244 22.027 235.509 22.027C230.775 22.027 227.636 18.3767 227.636 13.6313C227.636 8.88591 230.749 5.2356 235.509 5.2356ZM235.509 6.50246C231.573 6.50246 229.085 9.51935 229.085 13.6313C229.085 17.7433 231.565 20.7601 235.509 20.7601C239.453 20.7601 241.951 17.7182 241.951 13.6313C241.951 9.5444 239.403 6.50246 235.509 6.50246Z"
                        fill="black"
                      />
                      <path d="M246.825 5.50415H248.235V15.4817C248.235 18.7669 249.964 20.7603 253.152 20.7603C256.341 20.7603 258.066 18.7669 258.066 15.4817V5.50415H259.48V15.5246C259.48 19.5364 257.332 22.045 253.152 22.045C248.972 22.045 246.825 19.5149 246.825 15.5246V5.50415Z" fill="black" />
                      <path d="M267.657 6.77101H262.35V5.50415H274.371V6.77101H269.067V21.7337H267.657V6.77101Z" fill="black" />
                      <path d="M288.925 14.0215H278.629V21.7337H277.244V5.50415H278.629V12.7547H288.925V5.50415H290.335V21.7337H288.925V14.0215Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.78425 22.5496H6.32004V28.0036H0V0H9.78425V22.5496Z" fill="#E23540" />
                      <path d="M16.6053 0H11.4555V22.5496H16.6053V0Z" fill="#E23540" />
                      <path d="M21.5868 3.4751H18.4769V19.0748H21.5868V3.4751Z" fill="#E23540" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_134_5967">
                      <rect width="291" height="28" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_134_5967">
                      <rect width="290.335" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* <Image src={logoImage} alt="email icon" width="36" height="36" /> */}
                {/* <Link className="hover:underline space-x-1 leading-9" href="/">
                  <span className="text-3xl font-bold">propeller</span>
                  <span className="text-3xl font-bold">:</span>
                  <span className="uppercase font-extralight ">Exmouth</span>
                </Link> */}
              </h1>
              <nav className="flex items-center justify-between space-x-8">
                <Link className="hover:underline" href="/community">
                  Community
                </Link>
                <Link className="hover:underline" href="/spaces">
                  Spaces
                </Link>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
                {/* <Link className="hover:underline" href="/news">News</Link> */}
                <Link className="hover:underline" href="/events">
                  Events
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
        <footer className="flex justify-between p-24 text-white bg-black">
          <div id="footer-col-1" className="space-y-8">
            <h2 className="space-x-1">
              <span className="font-bold">Propeller</span>
              <span>:</span>
              <span>Exmouth</span>
            </h2>
            <div id="footer-social-links" className="space-x-2 text-red-600">
              <a className="bg-white rounded-full p-2 font-mono" target="_blank" rel="nofollow" href="https://www.facebook.com/propellerexmouth">
                fb
              </a>
              <a className="bg-white rounded-full p-2 font-mono" target="_blank" rel="nofollow" href="https://www.instagram.com/propellerexmouth/">
                ig
              </a>
              <a className="bg-white rounded-full p-2 font-mono" target="_blank" rel="nofollow" href="https://twitter.com/propellerexm">
                tw
              </a>
              <a className="bg-white rounded-full p-2 font-mono" target="_blank" rel="nofollow" href="https://www.linkedin.com/company/propellerexmouth">
                li
              </a>
              <a className="bg-white rounded-full p-2 font-mono" target="_blank" rel="nofollow" href="https://eventbrite.co.uk/o/propeller-exmouth-30738512963">
                eb
              </a>
            </div>
          </div>
          <nav className="space-y-2 flex flex-col underline">
            <Link href="/">Home</Link>
            <Link href="/spaces">Spaces</Link>
            <Link href="/about">About</Link>
            <Link href="/community">Community</Link>
            <Link href="/events">Events</Link>
          </nav>
          <div id="contact-details" className="space-y-8 ">
            <div id="email">
              {/* <Image src={...EmailIcon} alt="Email" className={"text-white fill-white"} /> */}
              {/* <img src={EmailIcon} alt="Email" className={"text-white fill-white"} /> */}
              <address className="not-italic">team@propellerexmouth.co.uk</address>
            </div>
            <div id="address">
              <address className="not-italic">15 Victoria Road, Exmouth, Devon, EX8 1DL</address>
            </div>
            <div id="phone">
              <address className="not-italic">01395 263509</address>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
