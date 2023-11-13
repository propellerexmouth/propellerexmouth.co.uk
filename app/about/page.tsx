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

      <div className="bg-secondary-100">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 flex align-top justify-between flex-col md:flex-row">
        <div className="w-full md:w-[48%] grid grid-rows-2 grid-cols-2 gap-4">
            <div className="block">
              <Image src="/images/pub-lunch.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/images/Propeller-cake.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/images/Paddleboarding.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
            <div className="block">
              <Image src="/images/DIY.jpg" alt="placeholder image" className="object-cover h-full w-full aspect-square" width="500" height="500"/>
            </div>
          </div>
          <div className="w-full md:w-[48%] mt-12 md:mt-0">
            <h4 className="mb-10 text-xl tracking-tight sm:text-2xl">
              Propeller is not just a co-working space, it’s a not-for-profit, volunteer run venture designed with a particular bias towards the creative and tech based industries, with a focus on promoting and growing these sectors in Exmouth.
            </h4>
            <p>
              Propeller is run as a social enterprise with the aim of making Exmouth an incredible place to build businesses while retaining a great lifestyle. We want people, especially students and school leavers, to believe they can live and thrive in Exmouth.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h4 className="mb-16 text-center text-xl tracking-tight sm:text-3xl text-primary-900 font-bold">
          The Team
        </h4>

        {/* <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
          <div className="w-fit md:w-[18%]">
            <Image src="/images/team/Charlie-Tilbury.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-full md:w-[78%] md:text-left text-center my-8 md:my-0">
            <h4 className="font-bold uppercase text-md">
              Charlie Tilbury
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Building and community manager
            </h4>
            <p>
            </p>
          </div>
        </div> */}

        <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
          <div className="w-fit md:w-[18%]">
            <Image src="/images/team/Nathan-Budd.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-full md:w-[78%] md:text-left text-center my-8 md:my-0">
            <h4 className="font-bold uppercase text-md">
              Nathan Budd
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            {/* <p>
            </p> */}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
          <div className="w-fit md:w-[18%]">
            <Image src="/images/team/Jim-Hill.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-full md:w-[78%] md:text-left text-center my-8 md:my-0">
            <h4 className="font-bold uppercase text-md">
              Jim Hill
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            {/* <p>
            </p> */}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
          <div className="w-fit md:w-[18%]">
            <Image src="/images/team/Alex-Marshall.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-full md:w-[78%] md:text-left text-center my-8 md:my-0">
            <h4 className="font-bold uppercase text-md">
              Alex Marshall
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding member (Volunteer)
            </h4>
            {/* <p>
            </p> */}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 flex-col md:flex-row">
          <div className="w-fit md:w-[18%]">
            <Image src="/images/team/Jasper-Westaway.jpg" alt="placeholder image" className="object-cover h-full w-auto aspect-square" width="100" height="100"/>
          </div>
          <div className="w-full md:w-[78%] md:text-left text-center my-8 md:my-0">
            <h4 className="font-bold uppercase text-md">
              Jasper Westaway
            </h4>
            <h4 className="mb-4 text-xl tracking-tight sm:text-2xl">
              Founding director (Volunteer)
            </h4>
            {/* <p>
            </p> */}
          </div>
        </div>
      </div>

        <div className="relative overflow-hidden bg-secondary-900">
          <div className="absolute z-0 top-0 left-0 w-full h-auto md:h-full">
            <PropellerLogoGreen className="h-full w-auto"/>
          </div>
          <div className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-20">
            <h4 className="mb-16 text-center text-xl tracking-tight sm:text-3xl text-white font-bold">
              Partners
            </h4>

            <div className="flex item-stretch justify-between flex-col md:flex-row">
              <div className="bg-white w-full md:w-[48%] p-12 my-4 md:my-0">
                <Image className="w-1/2 mb-12" src="/images/Hatch-Digital-Ocean.png" alt="Placeholder Image" height="100" width="100" />
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
              <div className="bg-white w-full md:w-[48%] p-12 my-4 md:my-0">
                <Image className="w-1/2 mb-12" src="/images/GoogleCloud-cropped.png" alt="Placeholder Image" height="100" width="100" />
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
