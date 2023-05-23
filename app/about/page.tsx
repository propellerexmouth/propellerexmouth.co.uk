import React from "react";
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
            <div className="block"><img className="object-cover h-full w-full" src="https://source.unsplash.com/random"/></div>
            <div className="block"><img className="object-cover h-full w-full" src="https://source.unsplash.com/random"/></div>
            <div className="block"><img className="object-cover h-full w-full" src="https://source.unsplash.com/random"/></div>
            <div className="block"><img className="object-cover h-full w-full" src="https://source.unsplash.com/random"/></div>
          </div>
          <div className="w-[48%]">
            <h4 className="mb-4 text-xl tracking-tight sm:text-xl">
              Propeller is not just a co-working space, it’s a not-for-profit, volunteer run venture designed with a particular bias towards the creative and tech based industries, with a focus on promoting and growing these sectors in Exmouth.
            </h4>
            <p>
              Propeller is run as a social enterprise with the aim of making Exmouth an incredible place to build businesses while retaining a great lifestyle. We want people, especially students and school leavers, to believe they can live and thrive in Exmouth.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h4 className="mb-16 text-center text-xl tracking-tight sm:text-3xl text-prop-red font-bold">
          The Team
        </h4>

        <div className="flex items-stretch justify-between mt-8">
          <div className="w-[18%]">
            <img className="object-cover h-full w-auto aspect-square" src="https://source.unsplash.com/random"/>
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
            <img className="object-cover h-full w-auto aspect-square" src="https://source.unsplash.com/random"/>
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
            <img className="object-cover h-full w-auto aspect-square" src="https://source.unsplash.com/random"/>
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
            <img className="object-cover h-full w-auto aspect-square" src="https://source.unsplash.com/random"/>
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
            <img className="object-cover h-full w-auto aspect-square" src="https://source.unsplash.com/random"/>
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



    </div>
  );

};

export default AboutPage;
