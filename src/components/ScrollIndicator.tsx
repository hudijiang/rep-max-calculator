'use client';

import React from 'react';

const ScrollIndicator = () => {
    const scrollToDetails = () => {
        const detailsSection = document.getElementById('details');
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onClick={scrollToDetails}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    );
};

export default ScrollIndicator;
