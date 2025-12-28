import React from 'react';

const BenchSvg = () => {
    return (
        <svg viewBox="0 0 200 200" className="w-full h-full bg-gray-900" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-orange" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </radialGradient>
                <style>
                    {`
            @keyframes press {
              0%, 100% { transform: translateY(0); }
              40% { transform: translateY(60px); }
              50% { transform: translateY(60px); }
              60% { transform: translateY(0); }
            }
            @keyframes arch {
              0%, 100% { stroke-width: 3; }
              50% { stroke-width: 5; }
            }
          `}
                </style>
            </defs>

            {/* Bench */}
            <rect x="40" y="140" width="120" height="10" fill="#374151" rx="2" />
            <rect x="50" y="150" width="10" height="40" fill="#1f2937" />
            <rect x="140" y="150" width="10" height="40" fill="#1f2937" />

            {/* Lifter Body (Abstract Arch) */}
            <path d="M50 140 Q100 110 150 140" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="135" r="8" fill="#1f2937" stroke="#60a5fa" strokeWidth="2" />

            {/* Animated Barbell */}
            <g style={{ animation: 'press 3s ease-in-out infinite' }}>
                <line x1="30" y1="80" x2="170" y2="80" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="80" r="18" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="2" />
                <circle cx="150" cy="80" r="18" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="2" />
                <circle cx="100" cy="80" r="30" fill="url(#glow-orange)" />
            </g>

            {/* Path Arrow */}
            <path d="M100 80 v60" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

        </svg>
    );
};

export default BenchSvg;
