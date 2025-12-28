'use client';

import React, { useState, ReactNode } from 'react';
import Image from 'next/image';

interface VideoCardProps {
    title: string;
    description?: string;
    thumbnailSrc?: string; // Made optional
    renderVisual?: ReactNode; // Changed from function to direct node for serialization
    videoSrc?: string; // Optional: real video URL
    gifSrc?: string;   // Optional: GIF URL for preview
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, thumbnailSrc, renderVisual, videoSrc, gifSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 hover:border-blue-500/50 transition-all duration-300">

            {/* Video/Thumbnail Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
                {!isPlaying ? (
                    <>
                        {renderVisual ? (
                            <div className="w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                                {renderVisual}
                                {/* Overlay Gradient for consistency */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
                            </div>
                        ) : thumbnailSrc && (
                            <Image
                                src={thumbnailSrc}
                                alt={`${title} technique demonstration`}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        )}

                        {/* Play Overlay (Still show play button on top of visual) */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors cursor-pointer" onClick={() => setIsPlaying(true)}>
                            <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* GIF Preview Label equivalent for SVG */}
                        {renderVisual && (
                            <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-md">
                                Animated Schematic
                            </span>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                        {/* Placeholder for actual video embed implementation */}
                        {videoSrc ? (
                            videoSrc.match(/\.(mp4|webm)$/) ? (
                                <video
                                    src={videoSrc}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    controls
                                    playsInline
                                />
                            ) : (
                                <iframe
                                    src={`${videoSrc}?autoplay=1`}
                                    className="w-full h-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={title}
                                />
                            )
                        ) : (
                            <div className="text-center p-6">
                                <p className="text-sm">Video placeholder active.</p>
                                <p className="text-xs text-gray-600 mt-2">(In production, this would load {title}.mp4)</p>
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="mt-4 text-xs text-blue-400 hover:text-blue-300"
                                >
                                    Close Video
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{title}</h4>
                {description && <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>}
            </div>
        </div>
    );
};

export default VideoCard;
