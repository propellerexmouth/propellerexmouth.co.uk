import Image from "next/image";

const MemberBenefits = ({ title, content }: { title?: string; content?: string; }) => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 my-20">
            <div className="flex flex-col w-full items-center">

                {title && <h3 className="text-primary-900 text-4xl font-bold mb-12">{title}</h3>}
                {content && <p>{content}</p>}

                <div className="flex justify-evenly flex-wrap w-full mb-12">
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/clock.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            24 hour access to desks, sofas, meeting spaces, kitchen and internet
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/stars.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            Time with other entrepreneurs that you can share ideas with
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/wave.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            Free access to talks and lectures from successful entrepreneurs and makers
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/coffee.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            Free tea and coffee and biscuits
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/sun.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            An awesome location, close to the sea, estuary, bars, shops and transport
                        </p>
                    </div>
                    <div className="text-center w-full md:w-[30%] my-8">
                        <video className="mx-auto" width="75" height="75" autoPlay loop muted>
                            <source src="/videos/bike.mp4" type="video/mp4"/>
                        </video>
                        <p className="p-4 text-sm">
                            Storage lockers, showers and secure bike storage
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberBenefits;
