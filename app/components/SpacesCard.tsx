import Link from "next/link";
import Image from "next/image";
import { TickIcon } from "./Icons";

type ImageProp = {
    src: string;
    alt: string;
    height: number;
    width: number;
}

const SpacesCard = ({ className = '', title, content, href, isAvailable = false, image }: { className?: string; title: string; content: string; href: string; isAvailable?: boolean; image: ImageProp; }) => {
    return (
      <>
        <div className={`bg-secondary-100 w-full relative flex flex-col md:items-stretch md:flex-row-reverse lg:flex-col ${className}`}>
            <div className="flex flex-col flex-1 gap-4 p-8 w-full md:max-w-[66.666%]  lg:max-w-none">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="mb-6">{content}</p>
                <Link href={href} className="text-primary-900 underline mt-auto">
                    Find out more
                </Link>
            </div>
            <div className="w-full md:max-w-[33.333%] lg:max-w-none">
                <Image {...image} className="w-full h-full object-cover lg:h-auto lg:object-fill" />
            </div>
            {isAvailable && <div className="flex items-stretch bottom-0 left-0">
                <div className="bg-white py-1 px-4">
                    Availability
                </div>
                <div className="bg-primary-900 py-1 px-4">
                    <TickIcon className="fill-white" />
                </div>
            </div>}
          </div>
      </>
    );
};


export default SpacesCard;
