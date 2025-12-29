'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/#guides' }, // Anchor for now, or link to a guides index if we had one
    ];

    const calculators = [
        { name: 'Bench Press 1RM', href: '/bench-press-1rm-calculator', icon: '🏋️' },
        { name: 'Squat 1RM', href: '/squat-1rm-calculator', icon: '🦵' },
        { name: 'Deadlift 1RM', href: '/deadlift-1rm-calculator', icon: '💪' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                1RM Calculator
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/guides/beginner-1rm-guide" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Guides
                        </Link>

                        {/* Calculators Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 group-hover:text-white transition-colors py-2 focus:outline-none">
                                Calculators
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full right-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                                <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden p-1">
                                    {calculators.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-colors"
                                        >
                                            <span>{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="h-px bg-gray-800 my-1"></div>
                                    <div className="px-4 py-2 text-xs text-gray-500 text-center">More tools comming soon</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800 absolute w-full px-4 py-4 space-y-4">
                    <Link
                        href="/guides/beginner-1rm-guide"
                        className="block text-base font-medium text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Guides
                    </Link>
                    <div className="space-y-2 pt-2 border-t border-gray-800">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Calculators</p>
                        {calculators.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 py-2 text-sm text-gray-300 hover:text-blue-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span>{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
