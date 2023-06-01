import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpacesSection from "../components/SpacesSection";


const CommunityPage = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-full relative overflow-hidden">
        <div className="max-w-3xl absolute top-0 left-0 w-full h-full sm:max-w-5xl lg:max-w-none">
          <Image src="/images/DSC_0112.jpg" alt="App screenshot" width={1080} height={720} className="object-cover h-full w-[60rem]" />
        </div>
        <div className="max-w-6xl px-6 mx-auto flex justify-end items-center">
          <div className="mx-auto w-full max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 my-20 z-20 bg-primary-900 px-10 py-32">
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Community
            </h1>
            <p className="mt-8 text-lg leading-8 text-white font-bold">
              We are a community of like-minded people who share ideas and help each other to develop and grow our businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="my-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">
            Existing members
          </h3>
          <p>
            Existing members are drawn from a mixture of technical and creative backgrounds, but we all work within small businesses that have the capacity to grow.
          </p>
        </div>
        <div className="flex items-stretch justify-start w-full overflow-scroll">
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/inconf.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/DataFiltr.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/ordaloca.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/pixel-fridge-logo.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/radiance.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/Simplyvideo.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/tvav.png" alt="App screenshot" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
        </div>
      </div>

      <div className="py-20 w-full">
        <h3 className="text-primary-900 text-4xl font-bold mb-12 max-w-6xl px-6 mx-auto text-center">
          Community Stories
        </h3>
        <p>
          Slider with images
        </p>
      </div>

      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col w-full items-center my-32">
          <h3 className="text-primary-900 text-2xl font-bold mb-12">
            What’s on for members?
          </h3>
          <div className="flex justify-evenly w-full mb-12">
              <div className="flex items-center">
                <div className="flex items-center p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                  <p>Icon</p>
                </div>
                <div className="p-4 text-sm">
                  <p>Propeller is not just a co-working space, it&apos;s a not-for-profit, volunteer-run venture.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                  <p className="">Icon</p>
                </div>
                <div className="p-4 text-sm">
                  <p>We are building a community of like-minded people and businesses that share ideas.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                  <p className="">Icon</p>
                </div>
                <div className="p-4 text-sm">
                  <p>Our focus is on promoting and growing creative and tech based industries in Exmouth.</p>
                </div>
              </div>
          </div>
          <Link href="/community" className="text-primary-900 underline text-xl">
            Find out more about our members
          </Link>
        </div>
      </div>
      
      <SpacesSection title="Spaces"/>

      <div className="my-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">
            Local businesses we love
          </h3>
        </div>
        <div className="flex items-stretch justify-start w-full overflow-scroll">
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/cabin.png" alt="Cabin Coffee Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/grapevine.png" alt="Grapevine Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/henrys.png" alt="Henry's Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/hop.png" alt="Hop Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/sea-dog.png" alt="Sea Dog Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
          <div className="block aspect-video w-fit min-w-[15%] h-auto mx-4 border border-grey-20 p-4">
            <Image src="/images/strand-deli.png" alt="Strand Deli Logo" width="200" height="200" className="object-contain h-full w-full" loading="lazy"/>
          </div>
        </div>
      </div>

    </div>
  );
};



export default CommunityPage;
