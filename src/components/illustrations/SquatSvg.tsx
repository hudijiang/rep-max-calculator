import React from 'react';

const SquatSvg = () => {
    return (
        <svg viewBox="0 0 200 200" className="w-full h-full bg-gray-900" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <style>
                    {`
            @keyframes squat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(60px); }
            }
            @keyframes thigh {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-90deg); }
            }
            @keyframes shin {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(45deg); }
            }
            @keyframes plate-pulse {
              0%, 100% { fill-opacity: 0.1; }
              50% { fill-opacity: 0.3; }
            }
            .animate-squat { animation: squat 3s ease-in-out infinite; }
            .animate-thigh { transform-origin: 100 100; animation: thigh 3s ease-in-out infinite; }
            .animate-shin { transform-origin: 100 160; animation: shin 3s ease-in-out infinite; }
          `}
                </style>
            </defs>

            {/* Background Grid */}
            <path d="M0 180 h200" stroke="#1f2937" strokeWidth="2" />
            <path d="M20 0 v200 M60 0 v200 M100 0 v200 M140 0 v200 M180 0 v200" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

            {/* Animated Group */}
            <g className="animate-squat">
                {/* Barbell */}
                <line x1="40" y1="50" x2="160" y2="50" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="15" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="150" cy="50" r="15" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" />

                {/* Glow */}
                <circle cx="100" cy="50" r="40" fill="url(#glow)" />

                {/* Body (Simplified) */}
                <g stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round">
                    {/* Torso */}
                    <line x1="100" y1="50" x2="100" y2="100" />
                </g>
            </g>

            {/* Legs - Attempting a connected stick figure movement is tricky with pure CSS transforms on disconnected parts.
          Using a simpler "Ghost" representation for the tech look.
      */}
            <path d="M80 180 L100 140 L120 180" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" />

        </svg>
    );
};

export default SquatSvg;
