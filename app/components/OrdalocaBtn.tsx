import React from "react";

const OrdalocaBtn = ({ url, className }: { url?: string; className: string }) => {
    return (
        <a href={url} target="_blank" className={`ordaloca-btn ${className}`}>
            <svg width="16" height="17.92" viewBox="0 0 25 28">
            <path
                d="M3.667 21.325c-4.882-4.882-4.882-12.796 0-17.678 4.881-4.881 12.796-4.881 17.678 0 4.881 4.882 4.881 12.796 0 17.678-1.547 1.547-4.485 3.503-8.812 5.866-4.203-2.203-7.159-4.159-8.866-5.866zm17.087-9.09a8.235 8.235 0 1 0-16.47 0c10.98 3.032 16.47 3.032 16.47 0z"
                fill="white"
                fill-rule="evenodd"
            ></path>
            </svg>
            <span className="ordaloca-btn-txt">Book now</span>
        </a>
    );
};

export default OrdalocaBtn;