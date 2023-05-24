import React from "react";
import Image from "next/image";
import { PropellerLogoGreen } from "../components/Icons";
import SimpleHero from "../components/SimpleHero";

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      <SimpleHero
        content="A social enterprise with the goal of making Exmouth an attractive place to grow a business"
      />

      <div className="bg-prop-turquoise">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 flex align-top justify-between">
        <div className="w-[48%] grid grid-rows-2 grid-cols-2 gap-4">
            <div className="block">
              <Image src="/../public/images/pub-lunch.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/../public/images/Propeller-cake.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/../public/images/Paddleboarding.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/../public/images/DIY.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
          </div>
          <div className="w-[48%]">
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Propeller is not just a co-working space, it’s a not-for-profit, volunteer run venture designed with a particular bias towards the creative and tech based industries, with a focus on promoting and growing these sectors in Exmouth.
            </h4>
            <p>
              Propeller is run as a social enterprise with the aim of making Exmouth an incredible place to build businesses while retaining a great lifestyle. We want people, especially students and school leavers, to believe they can live and thrive in Exmouth.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl py-20">
        <h4 className="mb-16 text-center text-xl tracking-tight sm:text-3xl text-prop-red font-bold">
          The Team
        </h4>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <Image src="/../public/images/team/Charlie-Tilbury.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-[78%]">
            <h4 className="font-bold uppercase text-md">
              Charlie Tilbury
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Building and community manager
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <Image src="/../public/images/team/Nathan-Budd.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-[78%]">
            <h4 className="font-bold uppercase text-md">
              Nathan Budd
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <Image src="/../public/images/team/Jim-Hill.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-[78%]">
            <h4 className="font-bold uppercase text-md">
              Jim Hill
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <Image src="/../public/images/team/Alex-Marshall.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-[78%]">
            <h4 className="font-bold uppercase text-md">
              Alex Marshall
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <Image src="/../public/images/team/Jasper-Westaway.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-[78%]">
            <h4 className="font-bold uppercase text-md">
              Jasper Westaway
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>

        <div className="relative overflow-hidden bg-prop-teal">
          <div className="absolute z-0 top-0 left-0 w-full h-full">
            <PropellerLogoGreen className="h-full w-auto"/>
          </div>
          <div className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-32">
            <h4 className="mb-16 text-center text-xl tracking-tight sm:text-3xl text-white font-bold">
              Partners
            </h4>

            <div className="flex item-stretch justify-between">
              <div className="bg-slate-200 w-[48%] p-12">
                <Image className="w-1/2 mb-12" src="/../public/images/Hatch-Digital-Ocean.png" alt="Placeholder Image" height="100" width="100" />
                <h4 className="mb-4 text-xl tracking-tight sm:text-xl">
                  Hatch by Digital Ocean
                </h4>
                <p className="mb-4">
                  We are a partner for the digital ocean hatch startup program.
                </p>
                <p className="mb-4">
                  Hatch is a global startup program that helps grow your business. You’ll gain access to a community of builders, technical support, infrastructure credit and more!
                </p>
                <p>
                  Get full details here: <a href="https://digitalocean.com/hatch">digitalocean.com/hatch</a> and you will need documentation from us, so just ask.
                </p>
              </div>
              <div className="bg-slate-200 w-[48%] p-12">
                <Image className="w-1/2 mb-12" src="/../public/images/GoogleCloud-cropped.png" alt="Placeholder Image" height="100" width="100" />
                <h4 className="mb-4 text-xl tracking-tight sm:text-xl">
                  Google Cloud for Startups program
                </h4>
                <p className="mb-4">
                  We are a partner for google cloud for startups program. 
                </p>
                <p className="mb-4">
                  Get access to dedicated startup experts, cloud credits for two years (up to $100,000 each year) and guidance from Google engineers. Build a thriving, sustainable business, with intelligent, cost-effective, proven technology that helps you move fast.
                </p>
                <p>
                  Get full details here, or ask us more about it: <a href="https://cloud.google.com/startup">cloud.google.com/startup</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      

    </div>
  );

};

export default AboutPage;
