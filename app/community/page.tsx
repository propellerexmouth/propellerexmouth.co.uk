"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { RightArrow } from "../components/Icons";
import Link from "next/link";
import SpacesSection from "../components/SpacesSection";
import shoes from "../../public/lotties/running-shoes.json";
import burger from "../../public/lotties/burger.json";
import swimming from "../../public/lotties/swimming-glasses.json";
import "../../public/css/swiper.css";
import "../../public/css/scrollbar.css";
import { register } from "swiper/element/bundle";
import { SwiperRef } from "@/types/swiper";
import dynamic from "next/dynamic";

register();

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CommunityPage = () => {
  const swiperElRef = useRef<SwiperRef>(null);

  const [images, setImages] = useState([
    { src: "/images/inconf.png", alt: "Inconf Logo" },
    { src: "/images/DataFiltr.png", alt: "DataFiltr Logo" },
    { src: "/images/ordaloca.png", alt: "Ordaloca Logo" },
    { src: "/images/pixel-fridge-logo.png", alt: "Pixelfridge Logo" },
    { src: "/images/radiance.png", alt: "Radiance Logo" },
    { src: "/images/tvav.png", alt: "TVAV Logo" },
  ]);

  const [localBusinesses, setLocalBusinesses] = useState([
    { src: "/images/cabin.png", alt: "Cabin Coffee Logo" },
    { src: "/images/grapevine.png", alt: "Grapevine Logo" },
    { src: "/images/henrys.png", alt: "Henry's Logo" },
    { src: "/images/hop.png", alt: "Hop Logo" },
    { src: "/images/sea-dog.png", alt: "Sea Dog Logo" },
    { src: "/images/strand-deli.png", alt: "Strand Deli Logo" },
  ]);

  const checkArrows = (item: any) => {
    if (item.swiper.activeIndex === 0) {
      setPrevActive(false);
    } else {
      setPrevActive(true);
    }
    if (item.swiper.activeIndex === item.swiper.slides.length - 1) {
      setNextActive(false);
    } else {
      setNextActive(true);
    }
  };

  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(true);

  const handleNext = () => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
    checkArrows(swiperElRef.current);
  };

  const handlePrev = () => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
    checkArrows(swiperElRef.current);
  };

  return (
    <div className="bg-white w-full">
      <div className="w-full relative overflow-hidden">
        <div className="max-w-5xl absolute top-0 left-0 w-full h-full sm:min-w-[calc(32rem_+_40vw)]">
          <Image src="/images/community-full.jpg" alt="A wide angled group shot of members of the Propeller Exmouth Community" width={1080} height={720} className="object-cover h-full w-full" />
        </div>
        <div className="max-w-6xl px-6 mx-auto flex justify-end items-center">
          <div className="mx-auto w-full max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl my-20 z-20 bg-primary-900 px-8 py-10 lg:px-10 lg:py-32">
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Community</h1>
            <p className="mt-8 text-lg leading-8 text-white font-bold">We are a community of like-minded people who share ideas and help each other to develop and grow our businesses.</p>
          </div>
        </div>
      </div>

      <div className="py-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">Existing members</h3>
          <p>Existing members are drawn from a mixture of technical and creative backgrounds, but we all work within small businesses that have the capacity to grow.</p>
        </div>
        <div className="flex items-stretch [justify-content:safe_center] w-full overflow-y-hidden overflow-x-auto custom-scrollbar pb-4">
          {images.map((image, index) => (
            <div key={index} className="flex aspect-video w-[200px] shrink-0 h-auto mx-4 border border-grey-20 p-4">
              <Image src={image.src} alt={image.alt} width={200} height={200} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 w-full bg-secondary-100 overflow-hidden">
        <div className="w-full max-w-5xl px-6 mx-auto relative">
          <h3 className="text-primary-900 text-4xl font-bold mb-12 text-center">Community Stories</h3>

          <swiper-container ref={swiperElRef} slides-per-view={1} space-between={30} centered-slides={true} loop={false} speed={1000} watch-slides-progress={true}>
            {/* Community stories slides go here */}
            {/* ... */}
          </swiper-container>

          <div className={(!prevActive ? "opacity-0" : "opacity-100") + " next-arrow w-10 h-10 absolute top-1/2 left-4 lg:left-auto lg:right-full -translate-y-1/2 fill-primary-900 z-10 cursor-pointer transition-all duration-300"} onClick={handlePrev}>
            <RightArrow className="w-10 h-10 fill-primary-900 rotate-180" />
          </div>
          <div className={(!nextActive ? "opacity-0" : "opacity-100") + " next-arrow w-10 h-10 absolute top-1/2 right-4 lg:right-auto lg:left-full -translate-y-1/2 fill-primary-900 z-10 cursor-pointer transition-all duration-300"} onClick={handleNext}>
            <RightArrow className="w-10 h-10 fill-primary-900" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col w-full items-center my-32">
          <h3 className="text-primary-900 text-2xl font-bold mb-12">What’s on for members?</h3>
          <div className="flex justify-evenly w-full mb-12 flex-col lg:flex-row gap-4">
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                <Lottie loop={true} className="max-w-[75px] mx-auto" autoplay={true} animationData={shoes} height={75} width={75} />
              </div>
              <div className="p-4 text-sm">
                <p>
                  <strong>Monday run club:</strong> Bring your trainers and take a spin along the seafront with other members
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                <Lottie loop={true} className="max-w-[75px] mx-auto" autoplay={true} animationData={burger} height={75} width={75} />
              </div>
              <div className="p-4 text-sm">
                <p>
                  <strong>Thursday lunch:</strong> Join some friendly folk for a social lunch - a burger at the pub, or a sandwich on the beach
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center aspect-square p-4 bg-secondary-100 text-secondary-900 bold text-3xl h-24 w-24 justify-center">
                <Lottie loop={true} className="max-w-[75px] mx-auto" autoplay={true} animationData={swimming} height={75} width={75} />
              </div>
              <div className="p-4 text-sm">
                <p>
                  <strong>Regular sea swims:</strong> When the weather is good we cool off with a dip at the beach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SpacesSection title="Spaces" />

      <div className="py-32 w-full">
        <div className="max-w-xl px-6 mx-auto text-center mb-8">
          <h3 className="text-primary-900 text-2xl font-bold mb-8">Local businesses we love</h3>
        </div>
        <div className="flex items-stretch [justify-content:safe_center] w-full overflow-y-hidden overflow-x-auto custom-scrollbar pb-4">
          {localBusinesses.map((business, index) => (
            <div key={index} className="inline-block min-w-0 aspect-video w-[200px] shrink-0 h-auto mx-4 border border-grey-20 p-4">
              <Image src={business.src} alt={business.alt} width={200} height={200} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
