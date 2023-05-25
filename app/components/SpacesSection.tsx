import SpacesCard from "./SpacesCard";


const SpacesSection = ({ title, content }: { title?: string; content?: string; }) => {
    return (
        <div className="bg-secondary-900 py-16 bg-[url('/mark.svg')] bg-[length:850px_auto] bg-no-repeat">
            <div className="max-w-wrapper mx-auto px-6">
                <div className="flex flex-col gap-10">
                    {(title || content) && (<div className="space-y-4 text-white text-center font-bold">
                        {title && <h2 className="text-3xl">{title}</h2>}
                        {content && <p className="text-lg">{content}</p>}
                    </div>)}
                    <div className="grid grid-flow-row lg:grid-flow-col gap-6">
                        <SpacesCard
                            image={{
                                src: '/images/DSC_0112.jpg',
                                alt: 'Co-working image',
                                height: 250,
                                width: 375,
                            }}
                            title="Co-working"
                            content="Desks in our shared workspace are suitable for individuals and small teams"
                            href="/community"
                        />
                        <SpacesCard
                            image={{
                                src: '/images/DSC_0112.jpg',
                                alt: 'Offices image',
                                height: 250,
                                width: 375,
                            }}
                            title="Offices"
                            content="We have a number of private offices, ranging from 4 - 20 people."
                            href="/community"
                        />
                        <SpacesCard
                            image={{
                                src: '/images/DSC_0112.jpg',
                                alt: 'Meeting Spaces image',
                                height: 250,
                                width: 375,
                            }}
                            title="Meeting Spaces"
                            content="Our meeting spaces are bookable for BOTH members and non-members"
                            href="/community"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpacesSection;
