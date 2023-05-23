import React from "react";

const SimpleHero = ({ content }: { content?: string }) => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1 className="max-w-screen-sm mt-8 text-xl font-bold tracking-tight sm:text-3xl">
                {content}
            </h1>
        </div>
    );
};

export default SimpleHero;